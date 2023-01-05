const e=`declare module 'three/examples/jsm/loaders/KTX2Loader' {
import { LoadingManager, CompressedTextureLoader, CompressedTexture, WebGLRenderer } from 'three/src/Three';

export class KTX2Loader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    setTranscoderPath(path: string): KTX2Loader;
    setWorkerLimit(limit: number): KTX2Loader;
    detectSupport(renderer: WebGLRenderer): KTX2Loader;
    dispose(): KTX2Loader;

    parse(
        buffer: ArrayBuffer,
        onLoad: (texture: CompressedTexture) => void,
        onError?: (event: ErrorEvent) => void,
    ): KTX2Loader;
}

}`;export{e as default};
