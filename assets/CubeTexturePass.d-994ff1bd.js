const e=`declare module 'three/examples/jsm/postprocessing/CubeTexturePass' {
import { PerspectiveCamera, CubeTexture, Mesh, Scene } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class CubeTexturePass extends Pass {
    constructor(camera: PerspectiveCamera, envMap?: CubeTexture, opacity?: number);
    camera: PerspectiveCamera;
    cubeShader: object;
    cubeMesh: Mesh;
    envMap: CubeTexture;
    opacity: number;
    cubeScene: Scene;
    cubeCamera: PerspectiveCamera;
}

}`;export{e as default};
