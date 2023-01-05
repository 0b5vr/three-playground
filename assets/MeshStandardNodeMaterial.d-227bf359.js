const e=`declare module 'three/examples/jsm/nodes/materials/MeshStandardNodeMaterial' {
import { ShaderMaterialParameters } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';
import NodeMaterial from 'three/examples/jsm/nodes/materials/NodeMaterial';

export default class MeshStandardNodeMaterial extends NodeMaterial {
    isMeshStandardNodeMaterial: true;

    colorNode: Node | null;
    opacityNode: Node | null;
    alphaTestNode: Node | null;
    normalNode: Node | null;
    emissiveNode: Node | null;

    metalnessNode: Node | null;
    roughnessNode: Node | null;

    clearcoatNode: Node | null;
    clearcoatRoughnessNode: Node | null;

    envNode: Node | null;

    lightsNode: Node | null;
    positionNode: Node | null;

    constructor(paramters?: ShaderMaterialParameters);
    copy(source: MeshStandardNodeMaterial): this;
}

}`;export{e as default};
