const e=`declare module 'three/examples/jsm/nodes/core/StackNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class StackNode extends Node {
    isStackNode: true;
    nodes: Node[];
    outputNode: Node | null;

    constructor();

    assign(targetNode: Node, sourceValue: Node): this;
}

}`;export{e as default};
