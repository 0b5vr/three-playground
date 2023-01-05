const e=`declare module 'three/examples/jsm/nodes/core/NodeCache' {
import Node from 'three/examples/jsm/nodes/core/Node';
import { NodeData } from 'three/examples/jsm/nodes/core/NodeBuilder';

export default class NodeCache {
    id: number;
    nodesData: WeakMap<Node, NodeData>;

    constructor();
}

}`;export{e as default};
