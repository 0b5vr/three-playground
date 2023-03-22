const n=`declare module 'three/src/lights/SpotLight' {
import { Color } from 'three/src/math/Color';
import { Vector3 } from 'three/src/math/Vector3';
import { Object3D } from 'three/src/core/Object3D';
import { SpotLightShadow } from 'three/src/lights/SpotLightShadow';
import { Light } from 'three/src/lights/Light';
import { ColorRepresentation } from 'three/src/utils';
import { Texture } from 'three/src/textures/Texture';

/**
 * A point light that can cast shadow in one direction.
 */
export class SpotLight extends Light {
    constructor(
        color?: ColorRepresentation,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );

    /**
     * @default 'SpotLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    position: Vector3;

    /**
     * Spotlight focus points at target.position.
     * @default new THREE.Object3D()
     */
    target: Object3D;

    /**
     * Light's intensity.
     * @default 2
     */
    intensity: number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * @default 0
     */
    distance: number;

    /**
     * Maximum extent of the spotlight, in radians, from its direction.
     * @default Math.PI / 3.
     */
    angle: number;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.SpotLightShadow()
     */
    shadow: SpotLightShadow;
    power: number;

    /**
     * @default 0
     */
    penumbra: number;

    /**
     * @default null
     */
    map: Texture | null;

    readonly isSpotLight: true;
}

}`;export{n as default};