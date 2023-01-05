const e=`declare module 'three/src/geometries/OctahedronGeometry' {
import { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry';

export class OctahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'OctahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): OctahedronGeometry;
}

}`;export{e as default};
