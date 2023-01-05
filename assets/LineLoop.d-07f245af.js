const e=`declare module 'three/src/objects/LineLoop' {
import { Line } from 'three/src/objects/Line';
import { Material } from 'three/src/materials/Material';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class LineLoop<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    type: 'LineLoop';
    readonly isLineLoop: true;
}

}`;export{e as default};
