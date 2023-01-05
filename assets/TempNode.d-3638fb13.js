const e=`declare module 'three/examples/jsm/nodes/core/TempNode' {
import { NodeTypeOption } from 'three/examples/jsm/nodes/core/constants';
import Node from 'three/examples/jsm/nodes/core/Node';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';

export default class TempNode extends Node {
    isTempNode: true;

    constructor(type: NodeTypeOption | null);

    hasDependencies(builder: NodeBuilder): void;
}

}`;export{e as default};
