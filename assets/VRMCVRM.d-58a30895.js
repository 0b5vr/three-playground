const n=`declare module '@pixiv/types-vrmc-vrm-1.0/VRMCVRM' {
import type { Expressions } from '@pixiv/types-vrmc-vrm-1.0/Expressions';
import type { FirstPerson } from '@pixiv/types-vrmc-vrm-1.0/FirstPerson';
import type { Humanoid } from '@pixiv/types-vrmc-vrm-1.0/Humanoid';
import type { LookAt } from '@pixiv/types-vrmc-vrm-1.0/LookAt';
import type { Meta } from '@pixiv/types-vrmc-vrm-1.0/Meta';
export interface VRMCVRM {
    /**
     * Specification version of VRMC_vrm
     */
    specVersion: '1.0' | '1.0-beta';
    /**
     * Meta informations of the VRM model
     */
    meta: Meta;
    humanoid: Humanoid;
    /**
     * First-person perspective settings
     */
    firstPerson?: FirstPerson;
    /**
     * Eye gaze control
     */
    lookAt?: LookAt;
    expressions?: Expressions;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
