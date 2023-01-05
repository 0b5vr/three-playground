const e=`declare module 'three/examples/jsm/postprocessing/TexturePass' {
import { Texture, ShaderMaterial } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class TexturePass extends Pass {
    constructor(map: Texture, opacity?: number);
    map: Texture;
    opacity: number;
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}

}`;export{e as default};
