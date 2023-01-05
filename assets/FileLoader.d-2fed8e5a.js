const e=`declare module 'three/src/loaders/FileLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';

export class FileLoader extends Loader {
    constructor(manager?: LoadingManager);

    mimeType: undefined | MimeType;
    responseType: undefined | string;

    load(
        url: string,
        onLoad?: (response: string | ArrayBuffer) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): any;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<string | ArrayBuffer>;
    setMimeType(mimeType: MimeType): FileLoader;
    setResponseType(responseType: string): FileLoader;
}

}`;export{e as default};
