const e=`declare module 'three/examples/jsm/postprocessing/LUTPass' {
import { DataTexture, Data3DTexture } from 'three/src/Three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export interface LUTPassParameters {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
}

export class LUTPass extends ShaderPass {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
    constructor(params: LUTPassParameters);
}

}`;export{e as default};
