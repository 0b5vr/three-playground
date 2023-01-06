const e=`declare module '@pixiv/types-vrmc-springbone-1.0/SpringBoneColliderShape' {
import type { SpringBoneColliderSphere } from '@pixiv/types-vrmc-springbone-1.0/SpringBoneColliderSphere';
import type { SpringBoneColliderCapsule } from '@pixiv/types-vrmc-springbone-1.0/SpringBoneColliderCapsule';
/**
 * Shape of collider. Have one of sphere and capsule
 */
export interface SpringBoneColliderShape {
    sphere?: SpringBoneColliderSphere;
    capsule?: SpringBoneColliderCapsule;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{e as default};
