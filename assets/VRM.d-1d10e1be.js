const n=`declare module '@pixiv/types-vrm-0.0/VRM' {
import type { BlendShape } from '@pixiv/types-vrm-0.0/BlendShape';
import type { FirstPerson } from '@pixiv/types-vrm-0.0/FirstPerson';
import type { Humanoid } from '@pixiv/types-vrm-0.0/Humanoid';
import type { Material } from '@pixiv/types-vrm-0.0/Material';
import type { Meta } from '@pixiv/types-vrm-0.0/Meta';
import type { SecondaryAnimation } from '@pixiv/types-vrm-0.0/SecondaryAnimation';
/**
 * VRM extension is for 3d humanoid avatars (and models) in VR applications.
 */
export interface VRM {
    /**
     * Version of exporter that vrm created. UniVRM-0.46
     */
    exporterVersion?: string;
    /**
     * Version of VRM specification. 0.0
     */
    specVersion?: '0.0';
    meta?: Meta;
    humanoid?: Humanoid;
    firstPerson?: FirstPerson;
    blendShapeMaster?: BlendShape;
    secondaryAnimation?: SecondaryAnimation;
    materialProperties?: Material[];
}

}`;export{n as default};
