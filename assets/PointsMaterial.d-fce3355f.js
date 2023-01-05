const e=`declare module 'three/src/materials/PointsMaterial' {
import { Material, MaterialParameters } from 'three/src/materials/Material';
import { Color } from 'three/src/math/Color';
import { Texture } from 'three/src/textures/Texture';
import { ColorRepresentation } from 'three/src/utils';

export interface PointsMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    size?: number | undefined;
    sizeAttenuation?: boolean | undefined;
    fog?: boolean | undefined;
}

export class PointsMaterial extends Material {
    constructor(parameters?: PointsMaterialParameters);

    /**
     * @default 'PointsMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 1
     */
    size: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: PointsMaterialParameters): void;
}

}`;export{e as default};
