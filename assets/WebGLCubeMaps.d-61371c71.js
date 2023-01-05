const e=`declare module 'three/src/renderers/webgl/WebGLCubeMaps' {
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';

export class WebGLCubeMaps {
    constructor(renderer: WebGLRenderer);

    get(texture: any): any;
    dispose(): void;
}

}`;export{e as default};
