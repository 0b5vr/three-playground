const n=`declare module '@pixiv/types-vrmc-vrm-1.0/FirstPerson' {
import type { FirstPersonMeshAnnotation } from '@pixiv/types-vrmc-vrm-1.0/FirstPersonMeshAnnotation';
/**
 * First-person perspective settings
 */
export interface FirstPerson {
    /**
     * Mesh rendering annotation for cameras
     */
    meshAnnotations?: FirstPersonMeshAnnotation[];
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
