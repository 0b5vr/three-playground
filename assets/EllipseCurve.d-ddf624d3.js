const n=`declare module 'three/src/extras/curves/EllipseCurve' {
import { Curve } from 'three/src/extras/core/Curve';
import { Vector2 } from 'three/src/math/Vector2';

export class EllipseCurve extends Curve<Vector2> {
    constructor(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    );

    /**
     * @default 'EllipseCurve'
     */
    type: string;

    /**
     * @default 0
     */
    aX: number;

    /**
     * @default 0
     */
    aY: number;

    /**
     * @default 1
     */
    xRadius: number;

    /**
     * @default 1
     */
    yRadius: number;

    /**
     * @default 0
     */
    aStartAngle: number;

    /**
     * @default 2 * Math.PI
     */
    aEndAngle: number;

    /**
     * @default false
     */
    aClockwise: boolean;

    /**
     * @default 0
     */
    aRotation: number;
}

}`;export{n as default};
