const r=`declare module 'three/examples/jsm/loaders/TiltLoader' {
import { Loader, LoadingManager, Group } from 'three/src/Three';

export class TiltLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (object: Group) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Group>;
    parse(data: ArrayBuffer): Group;
}

}`;export{r as default};
