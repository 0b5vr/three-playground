const e=`declare module 'three/examples/jsm/postprocessing/TAARenderPass' {
import { Scene, Camera, ColorRepresentation } from 'three/src/Three';

import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass';

export class TAARenderPass extends SSAARenderPass {
    constructor(scene: Scene, camera: Camera, clearColor: ColorRepresentation, clearAlpha: number);
    accumulate: boolean;
}

}`;export{e as default};
