const n=`declare module '@pixiv/types-vrmc-springbone-1.0/SpringBoneCollider' {
import type { SpringBoneColliderShape } from '@pixiv/types-vrmc-springbone-1.0/SpringBoneColliderShape';
/**
 * collider definition for SpringBone
 */
export interface SpringBoneCollider {
    node?: number;
    shape?: SpringBoneColliderShape;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
