const e=`declare module 'three/src/objects/Mesh' {
import { Material } from 'three/src/materials/Material';
import { Raycaster } from 'three/src/core/Raycaster';
import { Object3D } from 'three/src/core/Object3D';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Intersection } from 'three/src/core/Raycaster';
import { Vector3 } from 'three/src/math/Vector3';

export class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;
    readonly isMesh: true;
    type: string;

    updateMorphTargets(): void;

    /**
     * Get the current position of the indicated vertex in local space,
     * taking into account the current animation state of both morph targets and skinning.
     */
    getVertexPosition(vert: number, target: Vector3): Vector3;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
}

}`;export{e as default};
