const e=`declare module 'three/examples/jsm/objects/GroundProjectedEnv' {
import { Mesh, IcosahedronGeometry, ShaderMaterial, Texture } from 'three/src/Three';

export class GroundProjectedEnv extends Mesh<IcosahedronGeometry, ShaderMaterial> {
    constructor(texture: Texture, options?: { height?: number; radius?: number });

    set radius(radius: number);

    get radius(): number;

    set height(height: number);

    get height(): number;
}

}`;export{e as default};
