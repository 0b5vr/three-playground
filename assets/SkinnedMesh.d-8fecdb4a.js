const e=`declare module 'three/src/objects/SkinnedMesh' {
import { Material } from 'three/src/materials/Material';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Vector3 } from 'three/src/math/Vector3';
import { Skeleton } from 'three/src/objects/Skeleton';
import { Mesh } from 'three/src/objects/Mesh';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class SkinnedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean);

    bindMode: string;
    bindMatrix: Matrix4;
    bindMatrixInverse: Matrix4;
    skeleton: Skeleton;
    readonly isSkinnedMesh: true;

    bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
    pose(): void;
    normalizeSkinWeights(): void;
    updateMatrixWorld(force?: boolean): void;
    boneTransform(index: number, target: Vector3): Vector3;
}

}`;export{e as default};
