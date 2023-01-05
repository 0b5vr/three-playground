const e=`declare module 'three/examples/jsm/nodes/materials/SpriteNodeMaterial' {
import NodeMaterial from 'three/examples/jsm/nodes/materials/NodeMaterial';
import { ShaderMaterialParameters } from 'three/src/Three';
import { NodeBuilder } from 'three/examples/jsm/nodes/Nodes';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class SpriteNodeMaterial extends NodeMaterial {
    isSpriteNodeMaterial: true;

    colorNode: Node | null;
    opacityNode: Node | null;

    alphaTestNode: Node | null;

    lightNode: Node | null;

    positionNode: Node | null;
    rotationNode: Node | null;
    scaleNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
    generatePosition(builder: NodeBuilder): void;
    copy(source: SpriteNodeMaterial): this;
}

}`;export{e as default};
