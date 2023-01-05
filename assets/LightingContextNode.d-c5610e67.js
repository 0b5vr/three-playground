const e=`declare module 'three/examples/jsm/nodes/lighting/LightingContextNode' {
import ContextNode from 'three/examples/jsm/nodes/core/ContextNode';
import Node from 'three/examples/jsm/nodes/core/Node';
import { ShaderNode } from 'three/examples/jsm/nodes/Nodes';

export interface LightingModelNode {
    indirectDiffuse?: ShaderNode;
    indirectSpecular?: ShaderNode;
    ambientOcclusion?: ShaderNode;
}

export default class LightingContextNode extends ContextNode {
    lightingModelNode: LightingModelNode | null;

    constructor(node: Node, lightingModelNode?: LightingModelNode | null);
}

}`;export{e as default};
