const e=`declare module 'three/examples/jsm/nodes/core/AttributeNode' {
import { NodeTypeOption } from 'three/examples/jsm/nodes/core/constants';
import Node from 'three/examples/jsm/nodes/core/Node';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';

export default class AttributeNode extends Node {
    constructor(attributeName: string, nodeType?: NodeTypeOption | null);
    setAttributeName(attributeName: string): this;
    getAttributeName(builder: NodeBuilder): string;
}

}`;export{e as default};
