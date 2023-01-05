const e=`declare module 'three/examples/jsm/nodes/geometry/RangeNode' {
import { Color, Vector2, Vector3, Vector4 } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';

export type RangeModeBound = number | Color | Vector2 | Vector3 | Vector4;

export default class RangeNode extends Node {
    min: RangeModeBound;
    max: RangeModeBound;

    constructor(min: RangeModeBound, max: RangeModeBound);
    getVectorLength(): number;
}

}`;export{e as default};
