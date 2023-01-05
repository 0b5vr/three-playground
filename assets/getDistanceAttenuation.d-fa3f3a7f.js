const e=`declare module 'three/examples/jsm/nodes/functions/light/getDistanceAttenuation' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import Node from 'three/examples/jsm/nodes/core/Node';
declare const getDistanceAttenuation: ShaderNode<{ lightDistance: Node; cutoffDistance: Node; decayExponent: Node }>;

export default getDistanceAttenuation;

}`;export{e as default};
