const e=`declare module 'three/src/objects/Line' {
import { Material } from 'three/src/materials/Material';
import { Raycaster } from 'three/src/core/Raycaster';
import { Object3D } from 'three/src/core/Object3D';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Intersection } from 'three/src/core/Raycaster';

export class Line<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;

    type: 'Line' | 'LineLoop' | 'LineSegments' | string;
    readonly isLine: true;

    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;

    computeLineDistances(): this;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    updateMorphTargets(): void;
}

}`;export{e as default};
