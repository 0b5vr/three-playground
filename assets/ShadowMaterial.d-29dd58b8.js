const e=`declare module 'three/src/materials/ShadowMaterial' {
import { ColorRepresentation } from 'three/src/utils';
import { Color } from 'three/src/math/Color';
import { MaterialParameters, Material } from 'three/src/materials/Material';

export interface ShadowMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
}

export class ShadowMaterial extends Material {
    constructor(parameters?: ShadowMaterialParameters);

    /**
     * @default 'ShadowMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    color: Color;

    /**
     * @default true
     */
    transparent: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;
}

}`;export{e as default};
