const e=`declare module '@pixiv/three-vrm-springbone/helpers/VRMSpringBoneColliderHelper' {
import * as THREE from 'three';
import { VRMSpringBoneCollider } from '@pixiv/three-vrm-springbone/VRMSpringBoneCollider';
export declare class VRMSpringBoneColliderHelper extends THREE.Group {
    readonly collider: VRMSpringBoneCollider;
    private readonly _geometry;
    private readonly _line;
    constructor(collider: VRMSpringBoneCollider);
    dispose(): void;
    updateMatrixWorld(force: boolean): void;
}

}`;export{e as default};
