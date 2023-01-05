const e=`declare module 'three/examples/jsm/nodes/materials/LineBasicNodeMaterial' {
import NodeMaterial from 'three/examples/jsm/nodes/materials/NodeMaterial';
import { ShaderMaterialParameters } from 'three/src/Three';
import { Node } from 'three/examples/jsm/nodes/Nodes';

export default class LineBasicNodeMaterial extends NodeMaterial {
    isLineBasicNodeMaterial: true;

    colorNode: Node | null;
    opacityNode: Node | null;
    alphaTestNode: Node | null;
    lightNode: Node | null;
    positionNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
    copy(source: LineBasicNodeMaterial): this;
}

}`;export{e as default};
