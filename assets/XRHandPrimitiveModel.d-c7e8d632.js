const e=`declare module 'three/examples/jsm/webxr/XRHandPrimitiveModel' {
import { Group, Texture } from 'three/src/Three';

import { XRHandModel, XRHandModelHandedness } from 'three/examples/jsm/webxr/XRHandModelFactory';

export interface XRHandPrimitiveModelOptions {
    primitive?: 'sphere' | 'box' | undefined;
}

export class XRHandPrimitiveModel {
    controller: Group;
    handModel: XRHandModel;
    envMap: Texture | null;
    handMesh: Group;

    constructor(
        handModel: XRHandModel,
        controller: Group,
        path: string,
        handedness: XRHandModelHandedness,
        options: XRHandPrimitiveModelOptions,
    );

    updateMesh: () => void;
}

}`;export{e as default};
