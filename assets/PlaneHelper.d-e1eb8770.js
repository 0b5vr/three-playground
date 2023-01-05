const e=`declare module 'three/src/helpers/PlaneHelper' {
import { Plane } from 'three/src/math/Plane';
import { LineSegments } from 'three/src/objects/LineSegments';

export class PlaneHelper extends LineSegments {
    /**
     * @param plane
     * @param [size=1]
     * @param [hex=0xffff00]
     */
    constructor(plane: Plane, size?: number, hex?: number);

    /**
     * @default 'PlaneHelper'
     */
    type: string;

    plane: Plane;

    /**
     * @default 1
     */
    size: number;

    updateMatrixWorld(force?: boolean): void;

    dispose(): void;
}

}`;export{e as default};
