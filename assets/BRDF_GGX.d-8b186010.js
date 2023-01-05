const e=`declare module 'three/examples/jsm/nodes/functions/BSDF/BRDF_GGX' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import Node from 'three/examples/jsm/nodes/core/Node';

declare const BRDF_GGX: ShaderNode<{ lightDirection: Node; f0: Node; f90: Node; roughness: Node }>;

export default BRDF_GGX;

}`;export{e as default};
