const e=`declare module '@pixiv/three-vrm-core/humanoid/helpers/VRMHumanoidHelper' {
import * as THREE from 'three';
import { VRMHumanoid } from '@pixiv/three-vrm-core/humanoid/VRMHumanoid';
export declare class VRMHumanoidHelper extends THREE.Group {
    readonly vrmHumanoid: VRMHumanoid;
    private _boneAxesMap;
    constructor(humanoid: VRMHumanoid);
    dispose(): void;
    updateMatrixWorld(force: boolean): void;
}

}`;export{e as default};
