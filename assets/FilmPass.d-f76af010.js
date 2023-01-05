const e=`declare module 'three/examples/jsm/postprocessing/FilmPass' {
import { ShaderMaterial } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class FilmPass extends Pass {
    constructor(noiseIntensity?: number, scanlinesIntensity?: number, scanlinesCount?: number, grayscale?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}

}`;export{e as default};
