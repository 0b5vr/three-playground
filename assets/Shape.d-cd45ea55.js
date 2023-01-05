const n=`declare module 'three/src/extras/core/Shape' {
import { Vector2 } from 'three/src/math/Vector2';
import { Path } from 'three/src/extras/core/Path';

/**
 * Defines a 2d shape plane using paths.
 */
export class Shape extends Path {
    constructor(points?: Vector2[]);

    /**
     * @default 'Shape'
     */
    type: string;

    uuid: string;

    /**
     * @default []
     */
    holes: Path[];

    getPointsHoles(divisions: number): Vector2[][];

    extractPoints(divisions: number): {
        shape: Vector2[];
        holes: Vector2[][];
    };
}

}`;export{n as default};
