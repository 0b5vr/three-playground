const e=`declare module 'three/examples/jsm/nodes/math/CondNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class CondNode extends Node {
    condNode: Node;
    ifNode: Node;
    elseNode: Node;

    constructor(condNode: Node, ifNode: Node, elseNode: Node);
}

}`;export{e as default};
