const n=`declare module '@pixiv/types-vrm-0.0/SecondaryAnimation' {
import type { SecondaryAnimationColliderGroup } from '@pixiv/types-vrm-0.0/SecondaryAnimationColliderGroup';
import type { SecondaryAnimationSpring } from '@pixiv/types-vrm-0.0/SecondaryAnimationSpring';
/**
 * The setting of automatic animation of string-like objects such as tails and hairs.
 */
export interface SecondaryAnimation {
    boneGroups?: SecondaryAnimationSpring[];
    colliderGroups?: SecondaryAnimationColliderGroup[];
}

}`;export{n as default};
