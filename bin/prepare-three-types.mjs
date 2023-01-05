import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname( fileURLToPath( import.meta.url ) );
const typeDestination = path.resolve( dirname, '../src/types' );

const importFromRegex = /import\s(.+)\sfrom\s['"](.+)['"]/g;
const importNoneRegex = /import\s['"](.+)['"]/g;
const exportFromRegex = /export\s(.+)\sfrom\s['"](.+)['"]/g;

function resolveModule( currentPath, modulePath ) {
  if ( !modulePath.startsWith( '.' ) ) {
    return modulePath;
  }

  return path.join( currentPath, '..', modulePath ).replaceAll( '\\', '/' );
}

function replaceImports( content, currentPath ) {
  content = content.replaceAll( importFromRegex, ( _, stuff, modulePath ) => {
    const newModulePath = resolveModule( currentPath, modulePath );
    return `import ${ stuff } from '${ newModulePath }'`;
  } );

  content = content.replaceAll( importNoneRegex, ( _, modulePath ) => {
    const newModulePath = resolveModule( currentPath, modulePath );
    return `import '${ newModulePath }'`;
  } );

  content = content.replaceAll( exportFromRegex, ( _, stuff, modulePath ) => {
    const newModulePath = resolveModule( currentPath, modulePath );
    return `export ${ stuff } from '${ newModulePath }'`;
  } );

  return content;
}

function encloseWithModuleDeclaration( content, modulePath ) {
  return `declare module '${ modulePath }' {\n${ content }\n}`;
}

async function readdirRecursive( dir ) {
  const files = [];

  const entities = await fs.promises.readdir( dir );
  await Promise.all( entities.map( async ( name ) => {
    const entityPath = path.resolve( dir, name );
    const stat = await fs.promises.stat( entityPath );
    if ( stat.isDirectory() ) {
      files.push( ...await readdirRecursive( entityPath ) );
    } else {
      files.push( entityPath );
    }
  } ) );

  return files;
}

async function buildTypes( moduleName, srcDir ) {
  // list all .d.ts files in the src dir
  const dtsFiles = ( await readdirRecursive( srcDir ) )
    .filter( ( name ) => name.endsWith( '.d.ts' ) );

  // modify dts files for monaco editor + create a map file
  const mapEntryLines = await Promise.all(
    dtsFiles.map( async ( srcPath ) => {
      const relativePath = path.relative( srcDir, srcPath );
      const relativePathFwSlash = relativePath.replaceAll( '\\', '/' );
      const relativePathFwSlashWoExt = relativePathFwSlash.match( /(.+)\.d\.ts/ )[ 1 ];

      let data = await fs.promises.readFile( srcPath, { encoding: 'utf8' } );

      const currentPath = `${ moduleName }/${ relativePathFwSlashWoExt }`;

      data = replaceImports( data, currentPath );
      data = encloseWithModuleDeclaration(
        data,
        relativePathFwSlashWoExt === 'index' ? moduleName : currentPath,
      );

      await fse.outputFile(
        path.resolve( typeDestination, moduleName, relativePath ),
        data,
        { encoding: 'utf8' },
      );

      const mapKey = `'${ moduleName }/${ relativePathFwSlash }'`;
      const mapValueModule = `./${ moduleName }/${ relativePathFwSlash }?raw`;
      const mapValue = `import( '${ mapValueModule }' )`;

      return `  [ ${ mapKey }, ${ mapValue } ],`;
    } )
  );

  return mapEntryLines;
}

( async () => {
  // clean the previous export
  // protip: fs-extra's remove does nothing if the directory does not exist
  await fse.remove( typeDestination );

  // build types
  const moduleEntries = [
    [ '@pixiv/three-vrm', path.resolve( dirname, '../node_modules/@pixiv/three-vrm/types' ) ],
    [ 'camera-controls', path.resolve( dirname, '../node_modules/camera-controls/dist' ) ],
    [ 'three', path.resolve( dirname, '../node_modules/@types/three' ) ],
  ];
  const mapEntryLines = ( await Promise.all(
    moduleEntries.map( async ( [ moduleName, srcDir ] ) => {
      return await buildTypes( moduleName, srcDir );
    } )
  ) ).flat();

  const mapFileContent = [
    'export default new Map( [',
    ...mapEntryLines,
    '] );',
    ''
  ].join( '\n' );

  await fse.outputFile(
    path.resolve( typeDestination, 'dts-list.ts' ),
    mapFileContent,
    { encoding: 'utf8' },
  );
} )();
