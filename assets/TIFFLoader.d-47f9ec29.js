const e=`declare module 'three/examples/jsm/loaders/TIFFLoader' {
import { DataTextureLoader, TextureFilter, LoadingManager } from 'three';

export interface TIFFResult {
    width: number;
    height: number;
    data: Uint8Array;
    flipY: true;
    magFilter: TextureFilter;
    minFilter: TextureFilter;
}

export class TIFFLoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: Iterable<number>): TIFFResult;
}

}`;export{e as default};
