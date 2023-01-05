const e=`declare module 'three/src/renderers/webgl/WebGLShadowMap' {
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';
import { Scene } from 'three/src/scenes/Scene';
import { Camera } from 'three/src/cameras/Camera';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { ShadowMapType } from 'three/src/constants';
import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects';
import { Light } from 'three/src/lights/Light';

export class WebGLShadowMap {
    constructor(_renderer: WebGLRenderer, _objects: WebGLObjects, _capabilities: WebGLCapabilities);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    /**
     * @default THREE.PCFShadowMap
     */
    type: ShadowMapType;

    render(shadowsArray: Light[], scene: Scene, camera: Camera): void;

    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    cullFace: any;
}

}`;export{e as default};
