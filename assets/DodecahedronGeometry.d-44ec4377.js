const e=`declare module 'three/src/geometries/DodecahedronGeometry' {
import { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry';

export class DodecahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'DodecahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): DodecahedronGeometry;
}

}`;export{e as default};
