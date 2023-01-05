const e=`declare module 'three/examples/jsm/curves/NURBSCurve' {
import { Curve, Vector2, Vector3, Vector4 } from 'three/src/Three';

export class NURBSCurve extends Curve<Vector3> {
    constructor(
        degree: number,
        knots: number[],
        controlPoints: Vector2[] | Vector3[] | Vector4[],
        startKnot: number,
        endKnot: number,
    );
}

}`;export{e as default};
