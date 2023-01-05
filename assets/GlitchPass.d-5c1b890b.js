const e=`declare module 'three/examples/jsm/postprocessing/GlitchPass' {
import { ShaderMaterial, DataTexture } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class GlitchPass extends Pass {
    constructor(dt_size?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
    goWild: boolean;
    curF: number;
    randX: number;

    generateTrigger(): void;
    generateHeightmap(dt_size: number): DataTexture;
}

}`;export{e as default};
