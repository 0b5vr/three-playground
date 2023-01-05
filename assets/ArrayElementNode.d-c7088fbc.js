const e=`declare module 'three/examples/jsm/nodes/utils/ArrayElementNode' {
import Node from 'three/examples/jsm/nodes/core/Node';
import { TempNode } from 'three/examples/jsm/nodes/Nodes';

export default class ArrayElementNode extends TempNode {
    node: Node;
    indexNode: Node;

    constructor(node: Node, indexNode: Node);
}

}`;export{e as default};
