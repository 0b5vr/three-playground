const r=`declare module 'three/src/loaders/AudioLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';

export class AudioLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (audioBuffer: AudioBuffer) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AudioBuffer>;
}

}`;export{r as default};
