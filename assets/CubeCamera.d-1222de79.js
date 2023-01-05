const e=`declare module 'three/src/cameras/CubeCamera' {
import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget';
import { Scene } from 'three/src/scenes/Scene';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { Object3D } from 'three/src/core/Object3D';

export class CubeCamera extends Object3D {
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget);

    type: 'CubeCamera';

    renderTarget: WebGLCubeRenderTarget;

    update(renderer: WebGLRenderer, scene: Scene): void;
}

}`;export{e as default};
