const e=`declare module 'three/examples/jsm/loaders/MD2Loader' {
import { BufferGeometry, Loader, LoadingManager } from 'three/src/Three';

export class MD2Loader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (geometry: BufferGeometry) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<BufferGeometry>;
    parse(data: ArrayBuffer): BufferGeometry;
}

}`;export{e as default};
