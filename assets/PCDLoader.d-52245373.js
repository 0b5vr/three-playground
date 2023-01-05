const n=`declare module 'three/examples/jsm/loaders/PCDLoader' {
import { Points, Loader, LoadingManager } from 'three/src/Three';

export class PCDLoader extends Loader {
    constructor(manager?: LoadingManager);
    littleEndian: boolean;

    load(
        url: string,
        onLoad: (points: Points) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Points>;
    parse(data: ArrayBuffer | string): Points;
}

}`;export{n as default};
