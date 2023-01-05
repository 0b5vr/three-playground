const e=`declare module 'three/src/geometries/ShapeGeometry' {
import { Shape } from 'three/src/extras/core/Shape';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class ShapeGeometry extends BufferGeometry {
    /**
     * @default 'ShapShapeGeometryeBufferGeometry'
     */
    type: string;

    constructor(shapes?: Shape | Shape[], curveSegments?: number);

    static fromJSON(data: any): ShapeGeometry;
}

}`;export{e as default};
