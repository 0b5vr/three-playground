const e=`declare module '@pixiv/types-vrm-0.0/SecondaryAnimationCollider' {
import type { Vector3 } from '@pixiv/types-vrm-0.0/Vector3';
export interface SecondaryAnimationCollider {
    /**
     * The local coordinate from the node of the collider group.
     */
    offset?: Vector3;
    /**
     * The radius of the collider.
     */
    radius?: number;
}

}`;export{e as default};
