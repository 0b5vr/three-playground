const e=`declare module 'three/examples/jsm/nodes/utils/JoinNode' {
import Node from 'three/examples/jsm/nodes/core/Node';
import { TempNode } from 'three/examples/jsm/nodes/Nodes';

/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */
export default class JoinNode extends TempNode {
    nodes: Node[];
    constructor(nodes: Node[]);
}

}`;export{e as default};
