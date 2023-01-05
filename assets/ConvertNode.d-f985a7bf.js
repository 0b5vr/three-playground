const e=`declare module 'three/examples/jsm/nodes/utils/ConvertNode' {
import Node from 'three/examples/jsm/nodes/core/Node';
import { NodeTypeOption } from 'three/examples/jsm/nodes/Nodes';

export default class ConvertNode extends Node {
    node: Node;
    convertTo: NodeTypeOption;
    constructor(node: Node, convertTo: NodeTypeOption);
}

}`;export{e as default};
