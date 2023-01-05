const e=`declare module 'three/examples/jsm/effects/StereoEffect' {
import { Camera, Scene, WebGLRenderer } from 'three/src/Three';

export class StereoEffect {
    constructor(renderer: WebGLRenderer);

    setEyeSeparation(eyeSep: number): void;
    render(scene: Scene, camera: Camera): void;
    setSize(width: number, height: number): void;
}

}`;export{e as default};
