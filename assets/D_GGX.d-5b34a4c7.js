const e=`declare module 'three/examples/jsm/nodes/functions/BSDF/D_GGX' {
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import Node from 'three/examples/jsm/nodes/core/Node';

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
declare const D_GGX: ShaderNode<{ alpha: Node; dotNH: Node }>;

export default D_GGX;

}`;export{e as default};
