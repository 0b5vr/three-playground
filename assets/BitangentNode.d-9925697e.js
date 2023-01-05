const e=`declare module 'three/examples/jsm/nodes/accessors/BitangentNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export type BitangentNodeScope =
    | typeof BitangentNode.LOCAL
    | typeof BitangentNode.VIEW
    | typeof BitangentNode.WORLD
    | typeof BitangentNode.GEOMETRY;

export default class BitangentNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static VIEW: 'view';
    static WORLD: 'world';

    scope: BitangentNodeScope;

    constructor(scope?: BitangentNodeScope);
}

}`;export{e as default};
