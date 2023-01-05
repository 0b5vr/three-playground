const e=`declare module 'three/examples/jsm/nodes/utils/RotateUVNode' {
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class RotateUVNode extends TempNode {
    uvNode: Node;
    rotationNode: Node;
    centerNode: Node;

    constructor(uvNode: Node, rotationNode: Node, centerNode?: Node);
}

}`;export{e as default};
