const n=`declare module '@pixiv/three-vrm-core/humanoid/VRMHumanBoneParentMap' {
import { VRMHumanBoneName } from '@pixiv/three-vrm-core/humanoid/VRMHumanBoneName';
/**
 * An object that maps from {@link VRMHumanBoneName} to its parent {@link VRMHumanBoneName}.
 *
 * Ref: https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0/humanoid.md
 */
export declare const VRMHumanBoneParentMap: {
    [bone in VRMHumanBoneName]: VRMHumanBoneName | null;
};

}`;export{n as default};
