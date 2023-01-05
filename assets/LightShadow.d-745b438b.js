const e=`declare module 'three/src/lights/LightShadow' {
import { Camera } from 'three/src/cameras/Camera';
import { Light } from 'three/src/lights/Light';
import { Vector2 } from 'three/src/math/Vector2';
import { Vector4 } from 'three/src/math/Vector4';
import { Matrix4 } from 'three/src/math/Matrix4';
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget';

export class LightShadow {
    constructor(camera: Camera);

    camera: Camera;

    /**
     * @default 0
     */
    bias: number;

    /**
     * @default 0
     */
    normalBias: number;

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 8
     */
    blurSamples: number;

    /**
     * @default new THREE.Vector2( 512, 512 )
     */
    mapSize: Vector2;

    /**
     * @default null
     */
    map: WebGLRenderTarget;

    /**
     * @default null
     */
    mapPass: WebGLRenderTarget;

    /**
     * @default new THREE.Matrix4()
     */
    matrix: Matrix4;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    copy(source: LightShadow): this;
    clone(recursive?: boolean): this;
    toJSON(): any;
    getFrustum(): number;
    updateMatrices(light: Light, viewportIndex?: number): void;
    getViewport(viewportIndex: number): Vector4;
    getFrameExtents(): Vector2;
    dispose(): void;
}

}`;export{e as default};
