const n=`declare module 'three/src/extras/core/ShapePath' {
import { Vector2 } from 'three/src/math/Vector2';
import { Shape } from 'three/src/extras/core/Shape';
import { Color } from 'three/src/math/Color';

export class ShapePath {
    constructor();

    /**
     * @default 'ShapePath'
     */
    type: string;

    /**
     * @default new THREE.Color()
     */
    color: Color;

    /**
     * @default []
     */
    subPaths: any[];

    /**
     * @default null
     */
    currentPath: any;

    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;
    splineThru(pts: Vector2[]): this;
    toShapes(isCCW: boolean): Shape[];
}

}`;export{n as default};
