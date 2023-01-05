const e=`declare module 'three/src/geometries/TetrahedronGeometry' {
import { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry';

export class TetrahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'TetrahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): TetrahedronGeometry;
}

}`;export{e as default};
