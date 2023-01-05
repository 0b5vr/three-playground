const e=`declare module 'three/src/extras/curves/LineCurve3' {
import { Vector3 } from 'three/src/math/Vector3';
import { Curve } from 'three/src/extras/core/Curve';

export class LineCurve3 extends Curve<Vector3> {
    constructor(v1: Vector3, v2: Vector3);

    /**
     * @default 'LineCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;
}

}`;export{e as default};
