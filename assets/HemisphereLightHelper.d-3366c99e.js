const e=`declare module 'three/src/helpers/HemisphereLightHelper' {
import { HemisphereLight } from 'three/src/lights/HemisphereLight';
import { Color } from 'three/src/math/Color';
import { Matrix4 } from 'three/src/math/Matrix4';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { Object3D } from 'three/src/core/Object3D';
import { ColorRepresentation } from 'three/src/utils';

export class HemisphereLightHelper extends Object3D {
    constructor(light: HemisphereLight, size: number, color?: ColorRepresentation);

    light: HemisphereLight;
    matrix: Matrix4;
    matrixAutoUpdate: boolean;
    material: MeshBasicMaterial;

    color: ColorRepresentation | undefined;

    dispose(): void;
    update(): void;
}

}`;export{e as default};
