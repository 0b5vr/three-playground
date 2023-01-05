const e=`declare module 'three/examples/jsm/nodes/materials/NodeMaterial' {
import { Material, ShaderMaterial } from 'three/src/Three';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';
import Node from 'three/examples/jsm/nodes/core/Node';
import { LightingModelNode } from 'three/examples/jsm/nodes/lighting/LightingContextNode';

export default class NodeMaterial extends ShaderMaterial {
    isNodeMaterial: true;
    lights: true;
    type: string;
    constructor();

    build(builder: NodeBuilder): void;
    customProgramCacheKey(): string;
    generatePosition(builder: NodeBuilder): void;
    generateDiffuseColor(builder: NodeBuilder): void;
    generateLight(
        builder: NodeBuilder,
        lights: { diffuseColorNode: Node; lightingModelNode: LightingModelNode; lightsNode?: Node },
    ): void;
    generateOutput(builder: NodeBuilder, lights: { diffuseColorNode: Node; outgoingLightNode: Node }): void;
    static fromMaterial(m: Material): NodeMaterial;
}

}`;export{e as default};
