const e=`declare module 'three/examples/jsm/nodes/functions/BSDF/DFGApprox' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeElements';
import Node from 'three/examples/jsm/nodes/core/Node';

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
declare const DFGApprox: ShaderNode<{ roughness: Node }>;

export default DFGApprox;

}`;export{e as default};
