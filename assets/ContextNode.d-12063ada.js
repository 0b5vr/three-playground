const e=`declare module 'three/examples/jsm/nodes/core/ContextNode' {
import Node from 'three/examples/jsm/nodes/core/Node';
import { NodeBuilderContext } from 'three/examples/jsm/nodes/core/NodeBuilder';

export default class ContextNode extends Node {
    isContextNode: true;
    node: Node;
    context: NodeBuilderContext;

    constructor(node: Node, context: NodeBuilderContext);
}

}`;export{e as default};
