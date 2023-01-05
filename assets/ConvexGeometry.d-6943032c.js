const e=`declare module 'three/examples/jsm/geometries/ConvexGeometry' {
import { BufferGeometry, Vector3 } from 'three/src/Three';

export class ConvexGeometry extends BufferGeometry {
    constructor(points?: Vector3[]);
}

}`;export{e as default};
