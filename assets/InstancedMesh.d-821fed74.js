const e=`declare module 'three/src/objects/InstancedMesh' {
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Material } from 'three/src/materials/Material';
import { BufferAttribute } from 'three/src/core/BufferAttribute';
import { InstancedBufferAttribute } from 'three/src/core/InstancedBufferAttribute';
import { Mesh } from 'three/src/objects/Mesh';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Color } from 'three/src/math/Color';

export class InstancedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry: TGeometry | undefined, material: TMaterial | undefined, count: number);

    count: number;
    instanceColor: null | InstancedBufferAttribute;
    instanceMatrix: InstancedBufferAttribute;
    readonly isInstancedMesh: true;

    getColorAt(index: number, color: Color): void;
    getMatrixAt(index: number, matrix: Matrix4): void;
    setColorAt(index: number, color: Color): void;
    setMatrixAt(index: number, matrix: Matrix4): void;
    dispose(): void;
}

}`;export{e as default};
