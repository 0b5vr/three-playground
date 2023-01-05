const e=`declare module 'three/examples/jsm/webxr/OculusHandModel' {
import { Mesh, Object3D, Texture, Vector3 } from 'three/src/Three';
import { XRHandMeshModel } from 'three/examples/jsm/webxr/XRHandMeshModel';

export class OculusHandModel extends Object3D {
    controller: Object3D;
    motionController: XRHandMeshModel | null;
    envMap: Texture | null;

    mesh: Mesh | null;

    constructor(controller: Object3D);

    updateMatrixWorld(force?: boolean): void;

    getPointerPosition(): Vector3 | null;

    intersectBoxObject(boxObject: Object3D): boolean;

    checkButton(button: Object3D): void;
}

}`;export{e as default};
