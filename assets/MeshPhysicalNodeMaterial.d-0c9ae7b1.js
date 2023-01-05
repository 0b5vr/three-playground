const e=`declare module 'three/examples/jsm/nodes/materials/MeshPhysicalNodeMaterial' {
import { ShaderMaterialParameters } from 'three/src/Three';
import { Swizzable, CheckerNode, Node } from 'three/examples/jsm/nodes/Nodes';

import MeshStandardNodeMaterial from 'three/examples/jsm/nodes/materials/MeshStandardNodeMaterial';

export default class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
    iridescenceNode: null | Swizzable<CheckerNode>;
    iridescenceIORNode: null | Swizzable;
    iridescenceThicknessNode: null | Swizzable;

    specularIntensityNode: Node | null;
    specularColorNode: Node | null;

    transmissionNode: Node | null;
    thicknessNode: Node | null;
    attenuationDistanceNode: Node | null;
    attenuationColorNode: Node | null;

    constructor(parameters: ShaderMaterialParameters);

    copy(source: MeshPhysicalNodeMaterial): this;
}

}`;export{e as default};
