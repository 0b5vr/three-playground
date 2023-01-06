const e=`declare module '@pixiv/three-vrm-springbone/VRMSpringBoneCollider' {
import * as THREE from 'three';
import type { VRMSpringBoneColliderShape } from '@pixiv/three-vrm-springbone/VRMSpringBoneColliderShape';
/**
 * Represents a collider of a VRM.
 */
export declare class VRMSpringBoneCollider extends THREE.Object3D {
    /**
     * The shape of the collider.
     */
    readonly shape: VRMSpringBoneColliderShape;
    constructor(shape: VRMSpringBoneColliderShape);
}

}`;export{e as default};
