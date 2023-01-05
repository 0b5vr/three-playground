const e=`declare module 'three/examples/jsm/lines/WireframeGeometry2' {
import { BufferGeometry } from 'three/src/Three';

import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';

export class WireframeGeometry2 extends LineSegmentsGeometry {
    constructor(geometry: BufferGeometry);
    readonly sWireframeGeometry2: boolean;
}

}`;export{e as default};
