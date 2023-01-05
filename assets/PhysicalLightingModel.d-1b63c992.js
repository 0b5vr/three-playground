const e=`declare module 'three/examples/jsm/nodes/functions/PhysicalLightingModel' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeElements';
import Node from 'three/examples/jsm/nodes/core/Node';

declare const PhysicalLightingModel: {
    direct: ShaderNode<{ lightDirection: Node; lightColor: Node; reflectedLight: Node }>;
    indirectDiffuse: ShaderNode<{ irradiance: Node; reflectedLight: Node }>;
    indirectSpecular: ShaderNode<{ radiance: Node; iblIrradiance: Node; reflectedLight: Node }>;
    ambientOcclusion: ShaderNode<{ ambientOcclusion: Node; reflectedLight: Node }>;
};

export default PhysicalLightingModel;

}`;export{e as default};
