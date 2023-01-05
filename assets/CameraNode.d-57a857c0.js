const e=`declare module 'three/examples/jsm/nodes/accessors/CameraNode' {
import Object3DNode, { Object3DNodeScope } from 'three/examples/jsm/nodes/accessors/Object3DNode';

export type CameraNodeScope = Object3DNodeScope | typeof CameraNode.PROJECTION_MATRIX;

export default class CameraNode extends Object3DNode {
    static PROJECTION_MATRIX: 'projectionMatrix';

    // @ts-expect-error
    scope: CameraNodeScope;

    constructor(scope?: CameraNodeScope);
}

}`;export{e as default};
