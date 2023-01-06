const n=`declare module '@pixiv/three-vrm-springbone/helpers/VRMSpringBoneJointHelper' {
import * as THREE from 'three';
import { VRMSpringBoneJoint } from '@pixiv/three-vrm-springbone/VRMSpringBoneJoint';
export declare class VRMSpringBoneJointHelper extends THREE.Group {
    readonly springBone: VRMSpringBoneJoint;
    private readonly _geometry;
    private readonly _line;
    constructor(springBone: VRMSpringBoneJoint);
    dispose(): void;
    updateMatrixWorld(force: boolean): void;
}

}`;export{n as default};
