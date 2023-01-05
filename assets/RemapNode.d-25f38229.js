const e=`declare module 'three/examples/jsm/nodes/utils/RemapNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class RemapNode extends Node {
    node: Node;
    inLowNode: Node;
    inHighNode: Node;
    outLowNode: Node;
    outHighNode: Node;

    doClamp: boolean;

    constructor(node: Node, inLowNode: Node, inHighNode: Node, outLowNode: Node, outHighNode: Node);
}

}`;export{e as default};
