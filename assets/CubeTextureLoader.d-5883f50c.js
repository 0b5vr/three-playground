const e=`declare module 'three/src/loaders/CubeTextureLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { CubeTexture } from 'three/src/textures/CubeTexture';

export class CubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        urls: string[],
        onLoad?: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
}

}`;export{e as default};
