const e=`declare module 'three/examples/jsm/nodes/accessors/TangentNode' {
import Node from 'three/examples/jsm/nodes/core/Node.js';

export type TangentNodeScope =
    | typeof TangentNode.LOCAL
    | typeof TangentNode.VIEW
    | typeof TangentNode.WORLD
    | typeof TangentNode.GEOMETRY;

export default class TangentNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static VIEW: 'view';
    static WORLD: 'world';

    scope: TangentNodeScope;

    constructor(scope?: TangentNodeScope);
}

}`;export{e as default};
