const o=`declare module '@pixiv/types-vrm-0.0/SecondaryAnimationColliderGroup' {
import type { SecondaryAnimationCollider } from '@pixiv/types-vrm-0.0/SecondaryAnimationCollider';
export interface SecondaryAnimationColliderGroup {
    /**
     * The node of the collider group for setting up collision detections.
     */
    node?: number;
    colliders?: SecondaryAnimationCollider[];
}

}`;export{o as default};
