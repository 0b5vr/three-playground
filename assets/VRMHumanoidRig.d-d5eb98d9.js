const n=`declare module '@pixiv/three-vrm-core/humanoid/VRMHumanoidRig' {
import * as THREE from 'three';
import { VRMHumanBoneName, VRMHumanBones } from '@pixiv/three-vrm-core/humanoid';
import { VRMRig } from '@pixiv/three-vrm-core/humanoid/VRMRig';
/**
 * A class represents the normalized Rig of a VRM.
 */
export declare class VRMHumanoidRig extends VRMRig {
    protected static _setupTransforms(modelRig: VRMRig): {
        rigBones: VRMHumanBones;
        root: THREE.Object3D;
        parentWorldRotations: {
            [boneName in VRMHumanBoneName]?: THREE.Quaternion;
        };
        boneRotations: {
            [boneName in VRMHumanBoneName]?: THREE.Quaternion;
        };
    };
    readonly original: VRMRig;
    readonly root: THREE.Object3D;
    protected readonly _parentWorldRotations: {
        [boneName in VRMHumanBoneName]?: THREE.Quaternion;
    };
    protected readonly _boneRotations: {
        [boneName in VRMHumanBoneName]?: THREE.Quaternion;
    };
    constructor(humanoid: VRMRig);
    /**
     * Update this humanoid rig.
     */
    update(): void;
}

}`;export{n as default};
