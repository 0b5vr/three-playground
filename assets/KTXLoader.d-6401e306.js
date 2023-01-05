const e=`declare module 'three/examples/jsm/loaders/KTXLoader' {
import { LoadingManager, CompressedTextureLoader, PixelFormat, CompressedPixelFormat } from 'three/src/Three';

export interface KTX {
    mipmaps: object[];
    width: number;
    height: number;
    format: PixelFormat | CompressedPixelFormat;
    mipmapCount: number;
    isCubemap: boolean;
}

export class KTXLoader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer, loadMipmaps: boolean): KTX;
}

}`;export{e as default};
