const e=`declare module 'three/examples/jsm/nodes/core/CacheNode' {
import Node from 'three/examples/jsm/nodes/core/Node';
import NodeCache from 'three/examples/jsm/nodes/core/NodeCache';

export default class CacheNode extends Node {
    isCacheNode: true;
    node: Node;
    cache: NodeCache;

    constructor(node: Node, cache?: NodeCache);
}

}`;export{e as default};
