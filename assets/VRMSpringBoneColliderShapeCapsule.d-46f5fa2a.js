const e=`declare module '@pixiv/three-vrm-springbone/VRMSpringBoneColliderShapeCapsule' {
import * as THREE from 'three';
import { VRMSpringBoneColliderShape } from '@pixiv/three-vrm-springbone/VRMSpringBoneColliderShape';
export declare class VRMSpringBoneColliderShapeCapsule extends VRMSpringBoneColliderShape {
    get type(): 'capsule';
    /**
     * The offset of the head from the origin.
     */
    offset: THREE.Vector3;
    /**
     * The offset of the tail from the origin.
     */
    tail: THREE.Vector3;
    /**
     * The radius.
     */
    radius: number;
    constructor(params?: {
        radius?: number;
        offset?: THREE.Vector3;
        tail?: THREE.Vector3;
    });
    calculateCollision(colliderMatrix: THREE.Matrix4, objectPosition: THREE.Vector3, objectRadius: number, target: THREE.Vector3): number;
}

}`;export{e as default};
