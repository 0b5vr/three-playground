const e=`declare module 'three/src/renderers/webgl/WebGLExtensions' {
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';

export class WebGLExtensions {
    constructor(gl: WebGLRenderingContext);

    has(name: string): boolean;
    init(capabilities: WebGLCapabilities): void;
    get(name: string): any;
}

}`;export{e as default};
