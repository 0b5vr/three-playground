import * as monaco from 'monaco-editor';
import { registerMonacoWorkers } from './registerMonacoWorkers';
import { registerThreeTypes } from './registerThreeTypes';
import './style.css';

const selectPresets = document.getElementById( 'selectPresets' ) as HTMLSelectElement;
const divEditor = document.getElementById( 'divEditor' ) as HTMLDivElement;
const canvas = document.getElementById( 'canvas' ) as HTMLCanvasElement;

const darkMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;

async function fetchExample( name: string ): Promise<void> {
  const res = await fetch( `./presets/${ name }.js` );
  const text = await res.text();

  editor.getModel()!.setValue( text );
  apply();
}

registerMonacoWorkers();
registerThreeTypes();

const editor = monaco.editor.create( divEditor, {
  language: 'typescript',
  automaticLayout: true,
  theme: darkMode ? 'vs-dark' : 'vs-light',
  minimap: {
    renderCharacters: false,
  },
} );

fetchExample( 'cube' );

monaco.languages.typescript.typescriptDefaults.setCompilerOptions( {
  target: monaco.languages.typescript.ScriptTarget.ES2016,
  allowNonTsExtensions: true,
  noEmit: true,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
} );

monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false
})

let lastUnmount: () => void | undefined;

const apply = () => {
  lastUnmount?.();

  const code = editor.getValue();
  const blob = new Blob( [ code ], { type: 'text/javascript' } );
  const url = URL.createObjectURL( blob );

  import( url ).then( ( mod ) => {
    lastUnmount = mod.default( { canvas } );
    URL.revokeObjectURL( url );
  } );
};

editor.addCommand( monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, apply );
editor.addCommand( monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyR, apply );

selectPresets.addEventListener( 'change', () => fetchExample( selectPresets.value ) );
