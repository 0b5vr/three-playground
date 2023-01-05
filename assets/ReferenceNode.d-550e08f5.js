const e=`declare module 'three/examples/jsm/nodes/accessors/ReferenceNode' {
import Node from 'three/examples/jsm/nodes/core/Node';
import { NodeTypeOption } from 'three/examples/jsm/nodes/Nodes';

export default class ReferenceNode<T> extends Node {
    object: T;
    property: string;
    uniformType: string;
    node: Node | null;

    constructor(property: string, uniformType: NodeTypeOption, object?: T | null);

    setNodeType(uniformType: NodeTypeOption): void;
}

}`;export{e as default};
