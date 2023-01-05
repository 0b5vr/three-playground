const e=`declare module 'three/examples/jsm/nodes/functions/BSDF/V_GGX_SmithCorrelated' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import Node from 'three/examples/jsm/nodes/core/Node';

declare const V_GGX_SmithCorrelated: ShaderNode<{ alpha: Node; dotNL: Node; dotNV: Node }>;

export default V_GGX_SmithCorrelated;

}`;export{e as default};
