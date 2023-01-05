const e=`declare module 'three/examples/jsm/nodes/accessors/Object3DNode' {
import { Object3D } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';

export type Object3DNodeScope =
    | typeof Object3DNode.VIEW_MATRIX
    | typeof Object3DNode.NORMAL_MATRIX
    | typeof Object3DNode.WORLD_MATRIX
    | typeof Object3DNode.POSITION
    | typeof Object3DNode.VIEW_POSITION;

export default class Object3DNode extends Node {
    static VIEW_MATRIX: 'viewMatrix';
    static NORMAL_MATRIX: 'normalMatrix';
    static WORLD_MATRIX: 'worldMatrix';
    static POSITION: 'position';
    static VIEW_POSITION: 'viewPosition';

    scope: Object3DNodeScope;
    object3d: Object3D | null;

    constructor(scope?: Object3DNodeScope, object3d?: Object3D | null);
}

}`;export{e as default};
