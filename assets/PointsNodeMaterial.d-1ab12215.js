const e=`declare module 'three/examples/jsm/nodes/materials/PointsNodeMaterial' {
import NodeMaterial from 'three/examples/jsm/nodes/materials/NodeMaterial';
import { ShaderMaterialParameters } from 'three/src/Three';
import { Node } from 'three/examples/jsm/nodes/Nodes';

export default class PointsNodeMaterial extends NodeMaterial {
    isPointsNodeMateria: true;
    colorNode: Node | null;
    opacityNode: Node | null;
    alphaTestNode: Node | null;
    lightNode: Node | null;
    sizeNode: Node | null;
    positionNode: Node | null;
    constructor(parameters?: ShaderMaterialParameters);
    copy(source: PointsNodeMaterial): this;
}

}`;export{e as default};
