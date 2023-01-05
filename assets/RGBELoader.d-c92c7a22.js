const e=`declare module 'three/examples/jsm/loaders/RGBELoader' {
import { LoadingManager, DataTextureLoader, TextureDataType, PixelFormat } from 'three/src/Three';

export interface RGBE {
    width: number;
    height: number;
    data: Float32Array | Uint8Array;
    header: string;
    gamma: number;
    exposure: number;
    type: TextureDataType;
}

export class RGBELoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);
    type: TextureDataType;

    parse(buffer: ArrayBuffer): RGBE;
    setDataType(type: TextureDataType): this;
}

}`;export{e as default};
