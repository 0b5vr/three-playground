const t=`declare module 'three/src/helpers/PointLightHelper' {
import { PointLight } from 'three/src/lights/PointLight';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Object3D } from 'three/src/core/Object3D';
import { ColorRepresentation } from 'three/src/utils';

export class PointLightHelper extends Object3D {
    constructor(light: PointLight, sphereSize?: number, color?: ColorRepresentation);

    /**
     * @default 'PointLightHelper'
     */
    type: string;

    light: PointLight;
    color: ColorRepresentation | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}

}`;export{t as default};
