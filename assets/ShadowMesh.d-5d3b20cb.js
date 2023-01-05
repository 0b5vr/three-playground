const e=`declare module 'three/examples/jsm/objects/ShadowMesh' {
import { Mesh, Plane, Vector4, Matrix4, MeshBasicMaterial, BufferGeometry } from 'three/src/Three';

export class ShadowMesh extends Mesh<BufferGeometry, MeshBasicMaterial> {
    readonly isShadowMesh: true;
    meshMatrix: Matrix4;

    constructor(mesh: Mesh);

    update(plane: Plane, lightPosition4D: Vector4): void;
}

}`;export{e as default};
