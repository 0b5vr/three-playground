const e=`declare module 'three/examples/jsm/exporters/KTX2Exporter' {
import { Data3DTexture, DataTexture, WebGLRenderer, WebGLRenderTarget } from 'three/src/Three';

export class KTX2Exporter {
    parse(arg1: Data3DTexture | DataTexture | WebGLRenderer, arg2?: WebGLRenderTarget): Uint8Array;
}

}`;export{e as default};
