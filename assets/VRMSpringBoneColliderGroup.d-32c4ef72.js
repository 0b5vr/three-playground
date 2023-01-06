const e=`declare module '@pixiv/three-vrm-springbone/VRMSpringBoneColliderGroup' {
import type { VRMSpringBoneCollider } from '@pixiv/three-vrm-springbone/VRMSpringBoneCollider';
/**
 * Represents a collider group of a VRM.
 */
export interface VRMSpringBoneColliderGroup {
    /**
     * The colliders of the collider group.
     */
    colliders: VRMSpringBoneCollider[];
    /**
     * The name of the collider.
     */
    name?: string;
}

}`;export{e as default};
