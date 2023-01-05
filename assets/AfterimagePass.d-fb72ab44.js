const e=`declare module 'three/examples/jsm/postprocessing/AfterimagePass' {
import { WebGLRenderTarget, ShaderMaterial } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class AfterimagePass extends Pass {
    constructor(damp?: number);
    shader: object;
    uniforms: object;
    textureComp: WebGLRenderTarget;
    textureOld: WebGLRenderTarget;
    shaderMaterial: ShaderMaterial;
    compFsQuad: FullScreenQuad;
    copyFsQuad: FullScreenQuad;
}

}`;export{e as default};
