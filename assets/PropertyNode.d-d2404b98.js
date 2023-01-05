const e=`declare module 'three/examples/jsm/nodes/core/PropertyNode' {
import { NodeTypeOption } from 'three/examples/jsm/nodes/core/constants';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class PropertyNode extends Node {
    constructor(name?: string, nodeType?: NodeTypeOption);
}

}`;export{e as default};
