const e=`declare module 'three/examples/jsm/nodes/core/BypassNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class BypassNode extends Node {
    isBypassNode: true;
    outputNode: Node;
    callNode: Node;

    constructor(returnNode: Node, callNode: Node);
}

}`;export{e as default};
