const e=`declare module 'three/examples/jsm/geometries/RoundedBoxGeometry' {
import { BoxGeometry } from 'three/src/Three';

export class RoundedBoxGeometry extends BoxGeometry {
    constructor(width?: number, height?: number, depth?: number, segments?: number, radius?: number);
}

}`;export{e as default};
