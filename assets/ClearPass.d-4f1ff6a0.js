const e=`declare module 'three/examples/jsm/postprocessing/ClearPass' {
import { ColorRepresentation } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export class ClearPass extends Pass {
    constructor(clearColor?: ColorRepresentation, clearAlpha?: number);
    clearColor: ColorRepresentation;
    clearAlpha: number;
}

}`;export{e as default};
