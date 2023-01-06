const n=`declare module '@pixiv/types-vrmc-vrm-1.0/HumanoidHumanBones' {
import type { HumanoidHumanBone } from '@pixiv/types-vrmc-vrm-1.0/HumanoidHumanBone';
import type { HumanoidHumanBoneName } from '@pixiv/types-vrmc-vrm-1.0/HumanoidHumanBoneName';
/**
 * Represents a set of humanBones of a humanoid.
 */
export declare type HumanoidHumanBones = {
    [key in HumanoidHumanBoneName]: HumanoidHumanBone;
};

}`;export{n as default};
