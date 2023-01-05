const e=`declare module 'three/examples/jsm/lines/LineGeometry' {
import { Line } from 'three/src/Three';

import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';

export class LineGeometry extends LineSegmentsGeometry {
    constructor();
    readonly isLineGeometry: true;

    fromLine(line: Line): this;
}

}`;export{e as default};
