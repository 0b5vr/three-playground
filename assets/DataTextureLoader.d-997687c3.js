const e=`declare module 'three/src/loaders/DataTextureLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { DataTexture } from 'three/src/textures/DataTexture';

export class DataTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (dataTexture: DataTexture, texData: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): DataTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<DataTexture>;
}

}`;export{e as default};
