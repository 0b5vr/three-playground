const e=`declare module '@pixiv/three-vrm-core/humanoid/VRMHumanBones' {
import type { VRMHumanBone } from '@pixiv/three-vrm-core/humanoid/VRMHumanBone';
import type { VRMHumanBoneName } from '@pixiv/three-vrm-core/humanoid/VRMHumanBoneName';
import type { VRMRequiredHumanBoneName } from '@pixiv/three-vrm-core/humanoid/VRMRequiredHumanBoneName';
/**
 * A map from {@link VRMHumanBoneName} to {@link VRMHumanBone}.
 */
export declare type VRMHumanBones = {
    [name in VRMHumanBoneName]?: VRMHumanBone;
} & {
    [name in VRMRequiredHumanBoneName]: VRMHumanBone;
};

}`;export{e as default};
