const r=`declare module 'three/examples/jsm/loaders/MDDLoader' {
import { AnimationClip, BufferAttribute, Loader, LoadingManager } from 'three/src/Three';

export interface MDD {
    morphTargets: BufferAttribute[];
    clip: AnimationClip;
}

export class MDDLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (result: MDD) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<MDD>;
    parse(data: ArrayBuffer): MDD;
}

}`;export{r as default};
