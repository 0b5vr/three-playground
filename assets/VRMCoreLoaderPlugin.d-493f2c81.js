const r=`declare module '@pixiv/three-vrm-core/VRMCoreLoaderPlugin' {
import { GLTF, GLTFLoaderPlugin, GLTFParser } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VRMCoreLoaderPluginOptions } from '@pixiv/three-vrm-core/VRMCoreLoaderPluginOptions';
import { VRMExpressionLoaderPlugin } from '@pixiv/three-vrm-core/expressions/VRMExpressionLoaderPlugin';
import { VRMFirstPersonLoaderPlugin } from '@pixiv/three-vrm-core/firstPerson/VRMFirstPersonLoaderPlugin';
import { VRMHumanoidLoaderPlugin } from '@pixiv/three-vrm-core/humanoid/VRMHumanoidLoaderPlugin';
import { VRMMetaLoaderPlugin } from '@pixiv/three-vrm-core/meta/VRMMetaLoaderPlugin';
import { VRMLookAtLoaderPlugin } from '@pixiv/three-vrm-core/lookAt/VRMLookAtLoaderPlugin';
export declare class VRMCoreLoaderPlugin implements GLTFLoaderPlugin {
    get name(): string;
    readonly parser: GLTFParser;
    readonly expressionPlugin: VRMExpressionLoaderPlugin;
    readonly firstPersonPlugin: VRMFirstPersonLoaderPlugin;
    readonly humanoidPlugin: VRMHumanoidLoaderPlugin;
    readonly lookAtPlugin: VRMLookAtLoaderPlugin;
    readonly metaPlugin: VRMMetaLoaderPlugin;
    constructor(parser: GLTFParser, options?: VRMCoreLoaderPluginOptions);
    afterRoot(gltf: GLTF): Promise<void>;
}

}`;export{r as default};
