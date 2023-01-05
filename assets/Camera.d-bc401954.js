const r=`declare module 'three/src/cameras/Camera' {
import { Matrix4 } from 'three/src/math/Matrix4';
import { Vector3 } from 'three/src/math/Vector3';
import { Object3D } from 'three/src/core/Object3D';

// Cameras ////////////////////////////////////////////////////////////////////////////////////////

/**
 * Abstract base class for cameras. This class should always be inherited when you build a new camera.
 */
export class Camera extends Object3D {
    /**
     * This constructor sets following properties to the correct type: matrixWorldInverse, projectionMatrix and projectionMatrixInverse.
     */
    constructor();

    /**
     * This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.
     * @default new THREE.Matrix4()
     */
    matrixWorldInverse: Matrix4;

    /**
     * This is the matrix which contains the projection.
     * @default new THREE.Matrix4()
     */
    projectionMatrix: Matrix4;

    /**
     * This is the inverse of projectionMatrix.
     * @default new THREE.Matrix4()
     */
    projectionMatrixInverse: Matrix4;

    readonly isCamera: true;

    getWorldDirection(target: Vector3): Vector3;

    updateMatrixWorld(force?: boolean): void;
}

}`;export{r as default};
