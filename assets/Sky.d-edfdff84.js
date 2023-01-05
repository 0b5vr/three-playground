const e=`declare module 'three/examples/jsm/objects/Sky' {
import { BoxGeometry, Mesh, ShaderMaterial } from 'three/src/Three';

export class Sky extends Mesh {
    constructor();

    geometry: BoxGeometry;
    material: ShaderMaterial;

    static SkyShader: object;
}

}`;export{e as default};
