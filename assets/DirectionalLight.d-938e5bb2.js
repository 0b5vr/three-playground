const t=`declare module 'three/src/lights/DirectionalLight' {
import { Object3D } from 'three/src/core/Object3D';
import { DirectionalLightShadow } from 'three/src/lights/DirectionalLightShadow';
import { Light } from 'three/src/lights/Light';
import { Vector3 } from 'three/src/math/Vector3';
import { ColorRepresentation } from 'three/src/utils';

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js|src/lights/DirectionalLight.js}
 *
 * @example
 * // White directional light at half intensity shining from the top.
 * const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
 * directionalLight.position.set( 0, 1, 0 );
 * scene.add( directionalLight );
 */
export class DirectionalLight extends Light {
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * @default 'DirectionalLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    readonly position: Vector3;

    /**
     * Target used for shadow camera orientation.
     * @default new THREE.Object3D()
     */
    target: Object3D;

    /**
     * Light's intensity.
     * @default 1
     */
    intensity: number;

    /**
     * @default new THREE.DirectionalLightShadow()
     */
    shadow: DirectionalLightShadow;
    readonly isDirectionalLight: true;
}

}`;export{t as default};
