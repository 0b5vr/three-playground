const e=`declare module 'three/examples/jsm/postprocessing/RenderPass' {
import { Scene, Camera, Material, Color } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class RenderPass extends Pass {
    constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number);
    scene: Scene;
    camera: Camera;
    overrideMaterial: Material;
    clearColor: Color;
    clearAlpha: number;
    clearDepth: boolean;
}

}`;export{e as default};
