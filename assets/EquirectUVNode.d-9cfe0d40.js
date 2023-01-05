const e=`declare module 'three/examples/jsm/nodes/utils/EquirectUVNode' {
import { PositionNode, TempNode } from 'three/examples/jsm/nodes/Nodes';
import { Swizzable } from 'three/examples/jsm/nodes/shadernode/ShaderNodeElements';

export default class EquirectUVNode extends TempNode {
    constructor(dirNode?: Swizzable<PositionNode>);
}

}`;export{e as default};
