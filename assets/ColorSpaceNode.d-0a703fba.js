const e=`declare module 'three/examples/jsm/nodes/display/ColorSpaceNode' {
import { TextureEncoding } from 'three/src/Three';
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import Node from 'three/examples/jsm/nodes/core/Node';
export type ColorSpaceNodeMethod = typeof ColorSpaceNode.LINEAR_TO_LINEAR | typeof ColorSpaceNode.LINEAR_TO_SRGB;

export default class ColorSpaceNode extends TempNode {
    static LINEAR_TO_LINEAR: 'LinearToLinear';
    static LINEAR_TO_SRGB: 'LinearTosRGB';

    method: ColorSpaceNodeMethod;
    node: Node;

    constructor(method: ColorSpaceNodeMethod | null, node: Node);
    fromEncoding(encoding: TextureEncoding): this;
}

}`;export{e as default};
