const e=`declare module 'three/examples/jsm/nodes/display/ColorAdjustmentNode' {
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import { Node } from 'three/examples/jsm/nodes/Nodes';

export type ColorAdjustmentMethod =
    | typeof ColorAdjustmentNode.SATURATION
    | typeof ColorAdjustmentNode.VIBRANCE
    | typeof ColorAdjustmentNode.HUE;

export default class ColorAdjustmentNode extends TempNode {
    static SATURATION: 'saturation';
    static VIBRANCE: 'vibrance';
    static HUE: 'hue';

    method: ColorAdjustmentMethod;

    colorNode: Node;
    adjustmentNode: Node;

    constructor(method: ColorAdjustmentMethod, colorNode: Node, adjustmentNode?: Node);
}

}`;export{e as default};
