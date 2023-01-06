const e=`declare module '@pixiv/three-vrm-core/VRMCoreParameters' {
import type { VRMExpressionManager } from '@pixiv/three-vrm-core/expressions/VRMExpressionManager';
import type { VRMFirstPerson } from '@pixiv/three-vrm-core/firstPerson/VRMFirstPerson';
import type { VRMHumanoid } from '@pixiv/three-vrm-core/humanoid/VRMHumanoid';
import type { VRMLookAt } from '@pixiv/three-vrm-core/lookAt/VRMLookAt';
import type { VRMMeta } from '@pixiv/three-vrm-core/meta/VRMMeta';
/**
 * Parameters for a {@link VRMCore} class.
 */
export interface VRMCoreParameters {
    scene: THREE.Group;
    meta: VRMMeta;
    humanoid: VRMHumanoid;
    expressionManager?: VRMExpressionManager;
    firstPerson?: VRMFirstPerson;
    lookAt?: VRMLookAt;
}

}`;export{e as default};
