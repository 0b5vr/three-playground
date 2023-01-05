const e=`declare module 'three/examples/jsm/nodes/fog/FogExp2Node' {
import Node from 'three/examples/jsm/nodes/core/Node';
import FogNode from 'three/examples/jsm/nodes/fog/FogNode';

export default class FogExp2Node extends FogNode {
    isFogExp2Node: true;
    densityNode: Node;

    constructor(colorNode: Node, densityNode: Node);
}

}`;export{e as default};
