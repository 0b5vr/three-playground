const e=`declare module 'three/examples/jsm/nodes/utils/SpecularMIPLevelNode' {
import { Node, TextureNode } from 'three/examples/jsm/nodes/Nodes';

export default class SpecularMIPLevelNode extends Node {
    textureNode: TextureNode;
    roughnessNode: Node | null;

    constructor(textureNode: TextureNode, roughnessNode?: Node | null);
}

}`;export{e as default};
