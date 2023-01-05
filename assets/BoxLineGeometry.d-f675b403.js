const e=`declare module 'three/examples/jsm/geometries/BoxLineGeometry' {
import { BufferGeometry } from 'three/src/Three';

export class BoxLineGeometry extends BufferGeometry {
    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthSegments?: number,
        heightSegments?: number,
        depthSegments?: number,
    );
}

}`;export{e as default};
