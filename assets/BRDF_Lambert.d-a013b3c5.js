const e=`declare module 'three/examples/jsm/nodes/functions/BSDF/BRDF_Lambert' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import Node from 'three/examples/jsm/nodes/core/Node';

declare const BRDF_Lambert: ShaderNode<{ diffuseColor: Node }>;

export default BRDF_Lambert;

}`;export{e as default};
