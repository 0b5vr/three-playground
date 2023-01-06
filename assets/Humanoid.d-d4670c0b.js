const n=`declare module '@pixiv/types-vrmc-vrm-1.0/Humanoid' {
import type { HumanoidHumanBones } from '@pixiv/types-vrmc-vrm-1.0/HumanoidHumanBones';
/**
 * Correspondence between nodes and human bones
 */
export interface Humanoid {
    humanBones: HumanoidHumanBones;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
