const e=`declare module 'three/examples/jsm/effects/ParallaxBarrierEffect' {
import { Camera, Scene, WebGLRenderer } from 'three/src/Three';

export class ParallaxBarrierEffect {
    constructor(renderer: WebGLRenderer);

    render(scene: Scene, camera: Camera): void;
    setSize(width: number, height: number): void;
}

}`;export{e as default};
