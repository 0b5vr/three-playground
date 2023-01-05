const e=`declare module 'three/examples/jsm/postprocessing/MaskPass' {
import { Scene, Camera } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class MaskPass extends Pass {
    constructor(scene: Scene, camera: Camera);
    scene: Scene;
    camera: Camera;
    inverse: boolean;
}

export class ClearMaskPass extends Pass {
    constructor();
}

}`;export{e as default};
