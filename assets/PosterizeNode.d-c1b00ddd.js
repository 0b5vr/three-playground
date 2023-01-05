const e=`declare module 'three/examples/jsm/nodes/display/PosterizeNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class PosterizeNode extends Node {
    sourceNode: Node;
    stepsNode: Node;

    constructor(sourceNode: Node, stepsNode: Node);
}

}`;export{e as default};
