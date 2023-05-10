const e=`declare module 'three/examples/jsm/loaders/HDRCubeTextureLoader' {
import { CubeTexture, Loader, LoadingManager, TextureDataType } from 'three/src/Three';

import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export class HDRCubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);
    hdrLoader: RGBELoader;
    type: TextureDataType;

    load(
        urls: string[],
        onLoad: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;
    loadAsync(urls: string[], onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
    setDataType(type: TextureDataType): this;
}

}`;export{e as default};
