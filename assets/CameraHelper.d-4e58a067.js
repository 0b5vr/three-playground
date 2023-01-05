const e=`declare module 'three/src/helpers/CameraHelper' {
import { Camera } from 'three/src/cameras/Camera';
import { LineSegments } from 'three/src/objects/LineSegments';

export class CameraHelper extends LineSegments {
    constructor(camera: Camera);

    camera: Camera;
    pointMap: { [id: string]: number[] };

    /**
     * @default 'CameraHelper'
     */
    type: string;

    update(): void;

    dispose(): void;
}

}`;export{e as default};
