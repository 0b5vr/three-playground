const e=`declare module 'three/src/lights/PointLightShadow' {
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { LightShadow } from 'three/src/lights/LightShadow';

export class PointLightShadow extends LightShadow {
    camera: PerspectiveCamera;
}

}`;export{e as default};
