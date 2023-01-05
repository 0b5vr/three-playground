const e=`declare module 'three/src/helpers/SpotLightHelper' {
import { Light } from 'three/src/lights/Light';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Object3D } from 'three/src/core/Object3D';
import { LineSegments } from 'three/src/objects/LineSegments';
import { ColorRepresentation } from 'three/src/utils';

export class SpotLightHelper extends Object3D {
    constructor(light: Light, color?: ColorRepresentation);

    light: Light;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;
    color: ColorRepresentation | undefined;
    cone: LineSegments;

    dispose(): void;
    update(): void;
}

}`;export{e as default};
