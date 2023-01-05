const e=`declare module 'three/examples/jsm/postprocessing/HalftonePass' {
import { ShaderMaterial } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export interface HalftonePassParameters {
    shape?: number;
    radius?: number;
    rotateR?: number;
    rotateB?: number;
    rotateG?: number;
    scatter?: number;
    blending?: number;
    blendingMode?: number;
    greyscale?: boolean;
    disable?: boolean;
}

export class HalftonePass extends Pass {
    constructor(width: number, height: number, params: HalftonePassParameters);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}

}`;export{e as default};
