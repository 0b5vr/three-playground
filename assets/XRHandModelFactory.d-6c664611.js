const e=`declare module 'three/examples/jsm/webxr/XRHandModelFactory' {
import { Group, Object3D } from 'three/src/Three';

import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from 'three/examples/jsm/webxr/XRHandPrimitiveModel';
import { XRHandMeshModel } from 'three/examples/jsm/webxr/XRHandMeshModel';

export type XRHandModelHandedness = 'left' | 'right';

export class XRHandModel extends Object3D {
    constructor();

    motionController: XRHandPrimitiveModel | XRHandMeshModel;
}

export class XRHandModelFactory {
    constructor();
    path: string;

    setPath(path: string): XRHandModelFactory;

    createHandModel(
        controller: Group,
        profile?: 'spheres' | 'boxes' | 'mesh',
        options?: XRHandPrimitiveModelOptions,
    ): XRHandModel;
}

}`;export{e as default};
