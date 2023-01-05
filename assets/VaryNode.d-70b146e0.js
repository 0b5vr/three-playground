const e=`declare module 'three/examples/jsm/nodes/core/VaryNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class VaryNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);
}

}`;export{e as default};
