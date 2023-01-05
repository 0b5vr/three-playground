const e=`declare module 'three/examples/jsm/effects/PeppersGhostEffect' {
import { Camera, Scene, WebGLRenderer } from 'three/src/Three';

export class PeppersGhostEffect {
    constructor(renderer: WebGLRenderer);
    cameraDistance: number;
    reflectFromAbove: boolean;

    render(scene: Scene, camera: Camera): void;
    setSize(width: number, height: number): void;
}

}`;export{e as default};
