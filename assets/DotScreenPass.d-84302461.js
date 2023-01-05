const e=`declare module 'three/examples/jsm/postprocessing/DotScreenPass' {
import { Vector2, ShaderMaterial } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class DotScreenPass extends Pass {
    constructor(center?: Vector2, angle?: number, scale?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}

}`;export{e as default};
