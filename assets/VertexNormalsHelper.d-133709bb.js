const e=`declare module 'three/examples/jsm/helpers/VertexNormalsHelper' {
import { Object3D, LineSegments } from 'three/src/Three';

export class VertexNormalsHelper extends LineSegments {
    constructor(object: Object3D, size?: number, hex?: number);

    object: Object3D;
    size: number;

    update(): void;

    dispose(): void;
}

}`;export{e as default};
