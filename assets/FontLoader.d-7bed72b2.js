const n=`declare module 'three/examples/jsm/loaders/FontLoader' {
import { Shape, Loader, LoadingManager } from 'three/src/Three';

export class FontLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (responseFont: Font) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Font>;
    parse(json: any): Font;
}

export class Font {
    constructor(jsondata: any);

    /**
     * @default 'Font'
     */
    type: string;

    data: string;

    generateShapes(text: string, size: number): Shape[];
}

}`;export{n as default};
