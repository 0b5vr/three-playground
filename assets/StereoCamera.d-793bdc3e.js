const e=`declare module 'three/src/cameras/StereoCamera' {
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Camera } from 'three/src/cameras/Camera';

export class StereoCamera extends Camera {
    constructor();

    type: 'StereoCamera';

    /**
     * @default 1
     */
    aspect: number;

    /**
     * @default 0.064
     */
    eyeSep: number;

    cameraL: PerspectiveCamera;
    cameraR: PerspectiveCamera;

    update(camera: PerspectiveCamera): void;
}

}`;export{e as default};
