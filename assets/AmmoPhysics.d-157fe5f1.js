const s=`declare module 'three/examples/jsm/physics/AmmoPhysics' {
import { Mesh, Vector3 } from 'three/src/Three';

export class AmmoPhysics {
    constructor();
    addMesh(mesh: Mesh, mass: number): void;
    setMeshPosition(mesh: Mesh, position: Vector3, index: number): void;
}

}`;export{s as default};
