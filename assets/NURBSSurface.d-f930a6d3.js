const e=`declare module 'three/examples/jsm/curves/NURBSSurface' {
import { Vector2, Vector3, Vector4 } from 'three/src/Three';

export class NURBSSurface {
    constructor(
        degree1: number,
        degree2: number,
        knots1: number[],
        knots2: number[],
        controlPoints: Vector2[][] | Vector3[][] | Vector4[][],
    );

    getPoint(t1: number, t2: number, target: Vector3): void;
}

}`;export{e as default};
