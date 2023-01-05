const e=`declare module 'three/src/materials/LineBasicMaterial' {
import { ColorRepresentation } from 'three/src/utils';
import { Color } from 'three/src/math/Color';
import { MaterialParameters, Material } from 'three/src/materials/Material';

export interface LineBasicMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
    linewidth?: number | undefined;
    linecap?: string | undefined;
    linejoin?: string | undefined;
}

export class LineBasicMaterial extends Material {
    constructor(parameters?: LineBasicMaterialParameters);

    /**
     * @default 'LineBasicMaterial'
     */
    type: string;

    /**
     * @default 0xffffff
     */
    color: Color;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default true
     */
    fog: boolean;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default 'round'
     */
    linecap: string;

    /**
     * @default 'round'
     */
    linejoin: string;

    setValues(parameters: LineBasicMaterialParameters): void;
}

}`;export{e as default};
