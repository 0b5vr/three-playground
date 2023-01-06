const n=`declare module '@pixiv/types-vrmc-springbone-1.0/VRMCSpringBone' {
import type { SpringBoneCollider } from '@pixiv/types-vrmc-springbone-1.0/SpringBoneCollider';
import type { SpringBoneColliderGroup } from '@pixiv/types-vrmc-springbone-1.0/SpringBoneColliderGroup';
import type { SpringBoneSpring } from '@pixiv/types-vrmc-springbone-1.0/SpringBoneSpring';
/**
 * SpringBone makes objects such as costumes and hair swaying
 */
export interface VRMCSpringBone {
    /**
     * Specification version of VRMC_springBone
     */
    specVersion: '1.0' | '1.0-beta';
    /**
     * An array of colliders.
     */
    colliders?: SpringBoneCollider[];
    /**
     * An array of collider groups.
     */
    colliderGroups?: SpringBoneColliderGroup[];
    /**
     * An array of springs.
     */
    springs?: SpringBoneSpring[];
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
