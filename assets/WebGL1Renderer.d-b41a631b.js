const e=`declare module 'three/src/renderers/WebGL1Renderer' {
import { WebGLRenderer, WebGLRendererParameters } from 'three/src/renderers/WebGLRenderer';

export class WebGL1Renderer extends WebGLRenderer {
    constructor(parameters?: WebGLRendererParameters);
    readonly isWebGL1Renderer: true;
}

}`;export{e as default};
