const t=`declare module 'three/src/lights/AmbientLight' {
import { ColorRepresentation } from 'three/src/utils';
import { Light } from 'three/src/lights/Light';

/**
 * This light's color gets applied to all the objects in the scene globally.
 *
 * @source https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js
 */
export class AmbientLight extends Light {
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     * @param [intensity=1]
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * @default 'AmbientLight'
     */
    type: string;

    readonly isAmbientLight: true;
}

}`;export{t as default};
