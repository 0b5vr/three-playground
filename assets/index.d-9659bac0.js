const e=`declare module '@pixiv/three-vrm/VRMUtils' {
import { deepDispose } from '@pixiv/three-vrm/VRMUtils/deepDispose';
import { removeUnnecessaryJoints } from '@pixiv/three-vrm/VRMUtils/removeUnnecessaryJoints';
import { removeUnnecessaryVertices } from '@pixiv/three-vrm/VRMUtils/removeUnnecessaryVertices';
import { rotateVRM0 } from '@pixiv/three-vrm/VRMUtils/rotateVRM0';
export declare class VRMUtils {
    private constructor();
    static deepDispose: typeof deepDispose;
    static removeUnnecessaryJoints: typeof removeUnnecessaryJoints;
    static removeUnnecessaryVertices: typeof removeUnnecessaryVertices;
    static rotateVRM0: typeof rotateVRM0;
}

}`;export{e as default};
