const e=`declare module 'three/examples/jsm/nodes/core/VarNode' {
import { OperatorNodeOp } from 'three/examples/jsm/nodes/math/OperatorNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class VarNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);

    op(op: OperatorNodeOp, ...params: Node[]): this;
    assign(...params: Node[]): this;
    add(...params: Node[]): this;
    sub(...params: Node[]): this;
    mul(...params: Node[]): this;
    div(...params: Node[]): this;
}

}`;export{e as default};
