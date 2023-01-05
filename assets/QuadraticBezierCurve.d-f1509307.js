const e=`declare module 'three/src/extras/curves/QuadraticBezierCurve' {
import { Vector2 } from 'three/src/math/Vector2';
import { Curve } from 'three/src/extras/core/Curve';

export class QuadraticBezierCurve extends Curve<Vector2> {
    constructor(v0: Vector2, v1: Vector2, v2: Vector2);

    /**
     * @default 'QuadraticBezierCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v0: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;
}

}`;export{e as default};
