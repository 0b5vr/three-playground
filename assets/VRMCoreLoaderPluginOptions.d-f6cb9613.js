const e=`declare module '@pixiv/three-vrm-core/VRMCoreLoaderPluginOptions' {
import { VRMExpressionLoaderPlugin } from '@pixiv/three-vrm-core/expressions/VRMExpressionLoaderPlugin';
import { VRMFirstPersonLoaderPlugin } from '@pixiv/three-vrm-core/firstPerson/VRMFirstPersonLoaderPlugin';
import { VRMHumanoidLoaderPlugin } from '@pixiv/three-vrm-core/humanoid/VRMHumanoidLoaderPlugin';
import { VRMLookAtLoaderPlugin } from '@pixiv/three-vrm-core/lookAt/VRMLookAtLoaderPlugin';
import { VRMMetaLoaderPlugin } from '@pixiv/three-vrm-core/meta/VRMMetaLoaderPlugin';
export interface VRMCoreLoaderPluginOptions {
    expressionPlugin?: VRMExpressionLoaderPlugin;
    firstPersonPlugin?: VRMFirstPersonLoaderPlugin;
    humanoidPlugin?: VRMHumanoidLoaderPlugin;
    lookAtPlugin?: VRMLookAtLoaderPlugin;
    metaPlugin?: VRMMetaLoaderPlugin;
    /**
     * If assigned, the object will be used as a helper root of every component.
     * Useful for debug.
     * Will be overwritten if you use custom loader plugins for each components.
     */
    helperRoot?: THREE.Object3D;
    autoUpdateHumanBones?: boolean;
}

}`;export{e as default};
