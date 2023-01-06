const n=`declare module '@pixiv/types-vrmc-springbone-1.0/SpringBoneColliderGroup' {
/**
 * collider group definition for SpringBone
 */
export interface SpringBoneColliderGroup {
    name?: string;
    colliders?: number[];
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
