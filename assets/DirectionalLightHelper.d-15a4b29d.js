const e=`declare module 'three/src/helpers/DirectionalLightHelper' {
import { DirectionalLight } from 'three/src/lights/DirectionalLight';
import { Line } from 'three/src/objects/Line';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Object3D } from 'three/src/core/Object3D';
import { ColorRepresentation } from 'three/src/utils';

export class DirectionalLightHelper extends Object3D {
    /**
     * @param light
     * @param [size=1]
     * @param color
     */
    constructor(light: DirectionalLight, size?: number, color?: ColorRepresentation);

    light: DirectionalLight;
    lightPlane: Line;
    targetLine: Line;

    /**
     * @default undefined
     */
    color: ColorRepresentation | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}

}`;export{e as default};
