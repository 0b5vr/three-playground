const e=`declare module 'three/src/extras/curves/ArcCurve' {
import { EllipseCurve } from 'three/src/extras/curves/EllipseCurve';
export class ArcCurve extends EllipseCurve {
    constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean);

    /**
     * @default 'ArcCurve'
     */
    type: string;
}

}`;export{e as default};
