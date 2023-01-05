const r=`declare module 'three/examples/jsm/loaders/KMZLoader' {
import { Loader, LoadingManager } from 'three/src/Three';

import { Collada } from 'three/examples/jsm/loaders/ColladaLoader';

export class KMZLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (kmz: Collada) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Collada>;
    parse(data: ArrayBuffer): Collada;
}

}`;export{r as default};
