const e=`declare module 'three/src/loaders/TextureLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { Texture } from 'three/src/textures/Texture';

/**
 * Class for loading a texture.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
export class TextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (texture: Texture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): Texture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Texture>;
}

}`;export{e as default};
