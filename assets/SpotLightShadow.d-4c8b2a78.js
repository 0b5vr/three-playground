const e=`declare module 'three/src/lights/SpotLightShadow' {
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { LightShadow } from 'three/src/lights/LightShadow';

export class SpotLightShadow extends LightShadow {
    camera: PerspectiveCamera;
    readonly isSpotLightShadow: true;

    /**
     * @default 1
     */
    focus: number;
}

}`;export{e as default};
