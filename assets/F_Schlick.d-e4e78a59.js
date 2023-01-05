const e=`declare module 'three/examples/jsm/nodes/functions/BSDF/F_Schlick' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import Node from 'three/examples/jsm/nodes/core/Node';

declare const F_Schlick: ShaderNode<{ f0: Node; f90: Node; dotVH: Node }>;

export default F_Schlick;

}`;export{e as default};
