const e=`declare module 'three/src/extras/core/CurvePath' {
import { Curve } from 'three/src/extras/core/Curve';
import { Vector } from 'three/src/math/Vector2';

export class CurvePath<T extends Vector> extends Curve<T> {
    constructor();

    /**
     * @default 'CurvePath'
     */
    type: string;

    /**
     * @default []
     */
    curves: Array<Curve<T>>;

    /**
     * @default false
     */
    autoClose: boolean;

    add(curve: Curve<T>): void;
    closePath(): void;
    getPoint(t: number, optionalTarget?: T): T;
    getCurveLengths(): number[];
}

}`;export{e as default};
