const e=`declare module 'three/examples/jsm/nodes/display/BlendModeNode' {
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import { ShaderNode } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import { Node } from 'three/examples/jsm/nodes/Nodes';

export const BurnNode: ShaderNode<{ base: Node; blendNode: Node }>;

export const DodgeNode: ShaderNode<{ base: Node; blendNode: Node }>;

export const ScreenNode: ShaderNode<{ base: Node; blendNode: Node }>;

export const OverlayNode: ShaderNode<{ base: Node; blendNode: Node }>;

export type BlendMode =
    | typeof BlendModeNode.BURN
    | typeof BlendModeNode.DODGE
    | typeof BlendModeNode.SCREEN
    | typeof BlendModeNode.OVERLAY;

export default class BlendModeNode extends TempNode {
    static BURN: 'burn';
    static DODGE: 'dodge';
    static SCREEN: 'screen';
    static OVERLAY: 'overlay';

    baseNode: Node;
    blendMode: BlendMode;
    blendNode: Node;

    constructor(blendMode: BlendMode, baseNode: Node, blendNode: Node);

    construct(): Node;
}

}`;export{e as default};
