const e=`declare module 'three/examples/jsm/postprocessing/SavePass' {
import { ShaderMaterial, WebGLRenderTarget } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class SavePass extends Pass {
    constructor(renderTarget?: WebGLRenderTarget);
    textureID: string;
    renderTarget: WebGLRenderTarget;
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}

}`;export{e as default};
