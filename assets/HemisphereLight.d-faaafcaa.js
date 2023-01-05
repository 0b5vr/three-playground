const e=`declare module 'three/src/lights/HemisphereLight' {
import { Color } from 'three/src/math/Color';
import { Vector3 } from 'three/src/math/Vector3';
import { Light } from 'three/src/lights/Light';
import { ColorRepresentation } from 'three/src/utils';

export class HemisphereLight extends Light {
    /**
     * @param skyColor
     * @param groundColor
     * @param [intensity=1]
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * @default 'HemisphereLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    position: Vector3;

    groundColor: Color;

    readonly isHemisphereLight: true;
}

}`;export{e as default};
