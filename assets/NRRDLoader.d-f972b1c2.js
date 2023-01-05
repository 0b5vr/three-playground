const e=`declare module 'three/examples/jsm/loaders/NRRDLoader' {
import { Loader, LoadingManager } from 'three/src/Three';

import { Volume } from 'three/examples/jsm/misc/Volume';

export class NRRDLoader extends Loader {
    constructor(manager?: LoadingManager);
    manager: LoadingManager;
    path: string;

    fieldFunctions: object;

    load(
        url: string,
        onLoad: (group: Volume) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    parse(data: string): Volume;
    parseChars(array: number[], start?: number, end?: number): string;
    setPath(value: string): this;
}

}`;export{e as default};
