const e=`declare module 'three/examples/jsm/lines/Wireframe' {
import { Mesh } from 'three/src/Three';

import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';

export class Wireframe extends Mesh {
    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    readonly isWireframe: true;

    computeLineDistances(): this;
}

}`;export{e as default};
