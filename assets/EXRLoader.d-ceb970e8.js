const e=`declare module 'three/examples/jsm/loaders/EXRLoader' {
import { LoadingManager, DataTextureLoader, TextureDataType, PixelFormat } from 'three/src/Three';

export interface EXR {
    header: object;
    width: number;
    height: number;
    data: Float32Array;
    format: PixelFormat;
    type: TextureDataType;
}

export class EXRLoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);
    type: TextureDataType;

    parse(buffer: ArrayBuffer): EXR;
    setDataType(type: TextureDataType): this;
}

}`;export{e as default};
