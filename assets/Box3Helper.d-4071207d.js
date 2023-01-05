const e=`declare module 'three/src/helpers/Box3Helper' {
import { Box3 } from 'three/src/math/Box3';
import { Color } from 'three/src/math/Color';
import { LineSegments } from 'three/src/objects/LineSegments';

export class Box3Helper extends LineSegments {
    /**
     * @param box
     * @param [color=0xffff00]
     */
    constructor(box: Box3, color?: Color);

    /**
     * @default 'Box3Helper'
     */
    type: string;

    box: Box3;

    dispose(): void;
}

}`;export{e as default};
