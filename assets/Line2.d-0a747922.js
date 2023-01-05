const e=`declare module 'three/examples/jsm/lines/Line2' {
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';

export class Line2 extends LineSegments2 {
    geometry: LineGeometry;
    material: LineMaterial;

    constructor(geometry?: LineGeometry, material?: LineMaterial);
    readonly isLine2: true;
}

}`;export{e as default};
