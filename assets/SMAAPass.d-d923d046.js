const e=`declare module 'three/examples/jsm/postprocessing/SMAAPass' {
import { ShaderMaterial, Texture, WebGLRenderTarget } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class SMAAPass extends Pass {
    constructor(width: number, height: number);
    edgesRT: WebGLRenderTarget;
    weightsRT: WebGLRenderTarget;
    areaTexture: Texture;
    searchTexture: Texture;
    uniformsEdges: object;
    materialEdges: ShaderMaterial;
    uniformsWeights: object;
    materialWeights: ShaderMaterial;
    uniformsBlend: object;
    materialBlend: ShaderMaterial;
    fsQuad: FullScreenQuad;

    getAreaTexture(): string;
    getSearchTexture(): string;
}

}`;export{e as default};
