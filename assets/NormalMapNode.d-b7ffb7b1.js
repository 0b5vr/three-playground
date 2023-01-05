const e=`declare module 'three/examples/jsm/nodes/display/NormalMapNode' {
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import { NormalMapTypes } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class NormalMapNode extends TempNode {
    node: Node;
    scaleNode: Node | null;

    normalMapType: NormalMapTypes;

    constructor(node: Node, scaleNode?: Node | null);
}

}`;export{e as default};
