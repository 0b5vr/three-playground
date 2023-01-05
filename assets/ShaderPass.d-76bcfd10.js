const e=`declare module 'three/examples/jsm/postprocessing/ShaderPass' {
import { ShaderMaterial } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class ShaderPass extends Pass {
    constructor(shader: object, textureID?: string);
    textureID: string;
    uniforms: { [name: string]: { value: any } };
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}

}`;export{e as default};
