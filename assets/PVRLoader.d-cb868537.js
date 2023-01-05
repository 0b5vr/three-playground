const e=`declare module 'three/examples/jsm/loaders/PVRLoader' {
import { LoadingManager, CompressedTextureLoader, CompressedPixelFormat } from 'three/src/Three';

export interface PVR {
    mipmaps: object[];
    width: number;
    height: number;
    format: CompressedPixelFormat;
    mipmapCount: number;
    isCubemap: boolean;
}

export class PVRLoader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer, loadMipmaps: boolean): PVR;
}

}`;export{e as default};
