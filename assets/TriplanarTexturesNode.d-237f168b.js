const e=`declare module 'three/examples/jsm/nodes/utils/TriplanarTexturesNode' {
import Node from 'three/examples/jsm/nodes/core/Node';
import { PositionNode, Swizzable, TextureNode } from 'three/examples/jsm/nodes/Nodes';

export default class TriplanarTexturesNode extends Node {
    textureXNode: TextureNode;
    textureYNode: TextureNode | null;
    textureZNode: TextureNode | null;

    scaleNode: Swizzable;

    positionNode: Swizzable<PositionNode>;
    normalNode: Swizzable<PositionNode>;

    constructor(
        textureXNode: Node,
        textureYNode?: TextureNode | null,
        textureZNode?: TextureNode | null,
        scaleNode?: Swizzable,
        positionNode?: Swizzable<PositionNode>,
        normalNode?: Swizzable<PositionNode>,
    );
}

}`;export{e as default};
