const e=`declare module 'three/src/extras/curves/SplineCurve' {
import { Vector2 } from 'three/src/math/Vector2';
import { Curve } from 'three/src/extras/core/Curve';

export class SplineCurve extends Curve<Vector2> {
    constructor(points?: Vector2[]);

    /**
     * @default 'SplineCurve'
     */
    type: string;

    /**
     * @default []
     */
    points: Vector2[];
}

}`;export{e as default};
