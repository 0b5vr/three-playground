import * as monaco from 'monaco-editor';
import dtsList from './types/dts-list';

export async function registerThreeTypes(): Promise<void> {
  const promises: Promise<any>[] = [];

  for ( const [ path, mod ] of dtsList ) {
    promises.push(
      mod.then( ( { default: content } ) => {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          content,
          `file:///node_modules/@types/${ path }`,
        );
      } )
    );
  }

  await Promise.all( promises );
}
