const e=`declare module 'three/examples/jsm/webxr/XRControllerModelFactory' {
import { Group, Object3D, Texture } from 'three/src/Three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class XRControllerModel extends Object3D {
    constructor();

    motionController: any;

    envMap: Texture;

    setEnvironmentMap(envMap: Texture): XRControllerModel;
}

export class XRControllerModelFactory {
    constructor(gltfLoader?: GLTFLoader);
    gltfLoader: GLTFLoader | null;
    path: string;

    createControllerModel(controller: Group): XRControllerModel;
}

}`;export{e as default};
