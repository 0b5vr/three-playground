const e=`declare module 'three/examples/jsm/nodes/core/ConstNode' {
import { NodeTypeOption, NodeValueOption } from 'three/examples/jsm/nodes/core/constants';
import InputNode from 'three/examples/jsm/nodes/core/InputNode';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';

export default class ConstNode extends InputNode {
    isConstNode: true;
    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);

    generateConst(builder: NodeBuilder): string;
}

}`;export{e as default};
