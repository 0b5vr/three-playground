const e=`declare module 'three/src/renderers/webgl/WebGLCubeUVMaps' {
import { WebGLRenderer, Texture } from 'three/src/Three';

export class WebGLCubeUVMaps {
    constructor(renderer: WebGLRenderer);

    get<T>(texture: T): T extends Texture ? Texture : T;
    dispose(): void;
}

}`;export{e as default};
