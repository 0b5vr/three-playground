const e=`declare module 'three/examples/jsm/lines/LineSegments2' {
import { Mesh } from 'three/src/Three';

import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';

export class LineSegments2 extends Mesh {
    geometry: LineSegmentsGeometry;
    material: LineMaterial;

    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    readonly isLineSegments2: true;

    computeLineDistances(): this;
}

}`;export{e as default};
