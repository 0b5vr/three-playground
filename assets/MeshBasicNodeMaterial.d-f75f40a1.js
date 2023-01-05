const e=`declare module 'three/examples/jsm/nodes/materials/MeshBasicNodeMaterial' {
import NodeMaterial from 'three/examples/jsm/nodes/materials/NodeMaterial';
import Node from 'three/examples/jsm/nodes/core/Node';
import { ShaderMaterialParameters } from 'three/src/Three';

export default class MeshBasicNodeMaterial extends NodeMaterial {
    isMeshBasicNodeMaterial: true;
    lights: true;

    colorNode: Node | null;
    opacityNode: Node | null;

    alphaTestNode: Node | null;
    lightNode: Node | null;

    positionNode: Node | null;

    constructor(paramters?: ShaderMaterialParameters);
    copy(source: MeshBasicNodeMaterial): this;
}

}`;export{e as default};
