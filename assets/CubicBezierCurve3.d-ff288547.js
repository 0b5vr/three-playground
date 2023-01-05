const e=`declare module 'three/src/extras/curves/CubicBezierCurve3' {
import { Vector3 } from 'three/src/math/Vector3';
import { Curve } from 'three/src/extras/core/Curve';

export class CubicBezierCurve3 extends Curve<Vector3> {
    constructor(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3);

    /**
     * @default 'CubicBezierCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v0: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v3: Vector3;
}

}`;export{e as default};
