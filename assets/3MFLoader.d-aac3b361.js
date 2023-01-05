const e=`declare module 'three/examples/jsm/loaders/3MFLoader' {
import { Loader, LoadingManager, Group } from 'three/src/Three';

export class ThreeMFLoader extends Loader {
    constructor(manager?: LoadingManager);
    availableExtensions: object[];

    load(
        url: string,
        onLoad: (object: Group) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Group>;
    parse(data: ArrayBuffer): Group;
    addExtension(extension: object): void;
}

}`;export{e as default};
