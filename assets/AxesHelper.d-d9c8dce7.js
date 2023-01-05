const e=`declare module 'three/src/helpers/AxesHelper' {
import { Color } from 'three/src/math/Color';
import { LineSegments } from 'three/src/objects/LineSegments';

export class AxesHelper extends LineSegments {
    /**
     * @param [size=1]
     */
    constructor(size?: number);

    /**
     * @default 'AxesHelper'
     */
    type: string;

    setColors(xAxisColor: Color, yAxisColor: Color, zAxisColor: Color): this;

    dispose(): void;
}

}`;export{e as default};
