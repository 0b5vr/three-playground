const e=`declare module '@pixiv/types-vrmc-vrm-1.0/ExpressionMaterialColorBind' {
import type { ExpressionMaterialColorType } from '@pixiv/types-vrmc-vrm-1.0/ExpressionMaterialColorType';
export interface ExpressionMaterialColorBind {
    /**
     * target material
     */
    material: number;
    type: ExpressionMaterialColorType;
    /**
     * target color
     */
    targetValue: [number, number, number, number];
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{e as default};
