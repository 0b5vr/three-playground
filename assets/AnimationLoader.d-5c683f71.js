const n=`declare module 'three/src/loaders/AnimationLoader' {
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { Loader } from 'three/src/loaders/Loader';
import { AnimationClip } from 'three/src/animation/AnimationClip';

export class AnimationLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (response: AnimationClip[]) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AnimationClip[]>;
    parse(json: any): AnimationClip[];
}

}`;export{n as default};
