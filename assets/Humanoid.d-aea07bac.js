const n=`declare module '@pixiv/types-vrm-0.0/Humanoid' {
import type { HumanoidBone } from '@pixiv/types-vrm-0.0/HumanoidBone';
export interface Humanoid {
    humanBones?: HumanoidBone[];
    /**
     * Unity's HumanDescription.armStretch
     */
    armStretch?: number;
    /**
     * Unity's HumanDescription.legStretch
     */
    legStretch?: number;
    /**
     * Unity's HumanDescription.upperArmTwist
     */
    upperArmTwist?: number;
    /**
     * Unity's HumanDescription.lowerArmTwist
     */
    lowerArmTwist?: number;
    /**
     * Unity's HumanDescription.upperLegTwist
     */
    upperLegTwist?: number;
    /**
     * Unity's HumanDescription.lowerLegTwist
     */
    lowerLegTwist?: number;
    /**
     * Unity's HumanDescription.feetSpacing
     */
    feetSpacing?: number;
    /**
     * Unity's HumanDescription.hasTranslationDoF
     */
    hasTranslationDoF?: boolean;
}

}`;export{n as default};
