const e=`declare module 'three/examples/jsm/postprocessing/BokehPass' {
import { Scene, Camera, ShaderMaterial, WebGLRenderTarget, MeshDepthMaterial, Color } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export interface BokehPassParamters {
    focus?: number;
    aspect?: number;
    aperture?: number;
    maxblur?: number;
}

export class BokehPass extends Pass {
    constructor(scene: Scene, camera: Camera, params: BokehPassParamters);
    scene: Scene;
    camera: Camera;
    renderTargetColor: WebGLRenderTarget;
    renderTargetDepth: WebGLRenderTarget;
    materialDepth: MeshDepthMaterial;
    materialBokeh: ShaderMaterial;
    uniforms: object;
    fsQuad: FullScreenQuad;
    oldClearColor: Color;
}

}`;export{e as default};
