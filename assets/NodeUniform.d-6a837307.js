const e=`declare module 'three/examples/jsm/nodes/core/NodeUniform' {
import { NodeValueOption } from 'three/examples/jsm/nodes/core/constants';
import InputNode from 'three/examples/jsm/nodes/core/InputNode';

export default class NodeUniform {
    isNodeUniform: true;
    name: string;
    type: string;
    node: InputNode;
    needsUpdate: boolean;
    value: NodeValueOption;

    constructor(name: string, type: string, node: InputNode, needsUpdate?: boolean);
}

}`;export{e as default};
