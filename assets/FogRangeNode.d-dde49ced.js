const e=`declare module 'three/examples/jsm/nodes/fog/FogRangeNode' {
import FogNode from 'three/examples/jsm/nodes/fog/FogNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class FogRangeNode extends FogNode {
    isFogRangeNode: true;
    nearNode: Node;
    farNode: Node;

    constructor(colorNode: Node, nearNode: Node, farNode: Node);
}

}`;export{e as default};
