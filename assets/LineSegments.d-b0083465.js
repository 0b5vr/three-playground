const e=`declare module 'three/src/objects/LineSegments' {
import { Material } from 'three/src/materials/Material';
import { Line } from 'three/src/objects/Line';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

/**
 * @deprecated
 */
export const LineStrip: number;
/**
 * @deprecated
 */
export const LinePieces: number;

export class LineSegments<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * @default 'LineSegments'
     */
    type: 'LineSegments' | string;
    readonly isLineSegments: true;
}

}`;export{e as default};
