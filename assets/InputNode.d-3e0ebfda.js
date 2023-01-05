const e=`declare module 'three/examples/jsm/nodes/core/InputNode' {
import { NodeTypeOption, NodeValueOption } from 'three/examples/jsm/nodes/core/constants';
import Node from 'three/examples/jsm/nodes/core/Node';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';

export default abstract class InputNode extends Node {
    isInputNode: true;
    value: NodeValueOption;

    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);

    getInputType(builder: NodeBuilder): string | null;
}

}`;export{e as default};
