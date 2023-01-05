const e=`declare module 'three/examples/jsm/postprocessing/UnrealBloomPass' {
import { Color, MeshBasicMaterial, ShaderMaterial, Vector2, Vector3, WebGLRenderTarget } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class UnrealBloomPass extends Pass {
    constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
    resolution: Vector2;
    strength: number;
    radius: number;
    threshold: number;
    clearColor: Color;
    renderTargetsHorizontal: WebGLRenderTarget[];
    renderTargetsVertical: WebGLRenderTarget[];
    nMips: number;
    renderTargetBright: WebGLRenderTarget;
    highPassUniforms: object;
    materialHighPassFilter: ShaderMaterial;
    separableBlurMaterials: ShaderMaterial[];
    compositeMaterial: ShaderMaterial;
    bloomTintColors: Vector3[];
    copyUniforms: object;
    materialCopy: ShaderMaterial;
    oldClearColor: Color;
    oldClearAlpha: number;
    basic: MeshBasicMaterial;
    fsQuad: FullScreenQuad;

    dispose(): void;
    getSeperableBlurMaterial(): ShaderMaterial;
    getCompositeMaterial(): ShaderMaterial;
}

}`;export{e as default};
