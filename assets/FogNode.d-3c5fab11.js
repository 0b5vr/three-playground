const o=`declare module 'three/examples/jsm/nodes/fog/FogNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class FogNode extends Node {
    isFogNode: true;
    colorNode: Node;
    factorNode: Node;

    constructor(colorNode: Node, factorNode: Node);
    mix(outputNode: Node): Node;
}

}`;export{o as default};
