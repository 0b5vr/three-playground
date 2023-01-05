const e=`declare module 'three/examples/jsm/utils/CameraUtils' {
import { PerspectiveCamera, Vector3 } from 'three/src/Three';

export function frameCorners(
    camera: PerspectiveCamera,
    bottomLeftCorner: Vector3,
    bottomRightCorner: Vector3,
    topLeftCorner: Vector3,
    estimateViewFrustum?: boolean,
): void;

}`;export{e as default};
