const e=`declare module 'three/src/loaders/BufferGeometryLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { InstancedBufferGeometry } from 'three/src/core/InstancedBufferGeometry';

export class BufferGeometryLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (bufferGeometry: InstancedBufferGeometry | BufferGeometry) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): Promise<InstancedBufferGeometry | BufferGeometry>;
    parse(json: any): InstancedBufferGeometry | BufferGeometry;
}

}`;export{e as default};
