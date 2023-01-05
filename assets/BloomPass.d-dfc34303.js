const e=`declare module 'three/examples/jsm/postprocessing/BloomPass' {
import { WebGLRenderTarget, ShaderMaterial } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class BloomPass extends Pass {
    constructor(strength?: number, kernelSize?: number, sigma?: number);
    renderTargetX: WebGLRenderTarget;
    renderTargetY: WebGLRenderTarget;
    copyUniforms: object;
    materialCopy: ShaderMaterial;
    convolutionUniforms: object;
    materialConvolution: ShaderMaterial;
    fsQuad: FullScreenQuad;
}

}`;export{e as default};
