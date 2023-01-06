const e=`declare module '@pixiv/types-vrmc-vrm-1.0/Expression' {
import type { ExpressionMaterialColorBind } from '@pixiv/types-vrmc-vrm-1.0/ExpressionMaterialColorBind';
import type { ExpressionMorphTargetBind } from '@pixiv/types-vrmc-vrm-1.0/ExpressionMorphTargetBind';
import type { ExpressionOverrideType } from '@pixiv/types-vrmc-vrm-1.0/ExpressionOverrideType';
import type { ExpressionPresetName } from '@pixiv/types-vrmc-vrm-1.0/ExpressionPresetName';
import type { ExpressionTextureTransformBind } from '@pixiv/types-vrmc-vrm-1.0/ExpressionTextureTransformBind';
/**
 * Definition of expression by weighted animation
 */
export interface Expression {
    /**
     * Use only if the preset is custom. Unique within the model
     */
    name?: string;
    /**
     * Functions of Expression
     */
    preset: ExpressionPresetName;
    /**
     * Specify a morph target
     */
    morphTargetBinds?: ExpressionMorphTargetBind[];
    /**
     * Material color animation references
     */
    materialColorBinds?: ExpressionMaterialColorBind[];
    /**
     * Texture transform animation references
     */
    textureTransformBinds?: ExpressionTextureTransformBind[];
    /**
     * A value greater than 0.5 is 1.0, otherwise 0.0
     */
    isBinary?: boolean;
    /**
     * Override values of Blink expressions when this Expression is enabled
     */
    overrideBlink?: ExpressionOverrideType;
    /**
     * Override values of LookAt expressions when this Expression is enabled
     */
    overrideLookAt?: ExpressionOverrideType;
    /**
     * Override values of Mouth expressions when this Expression is enabled
     */
    overrideMouth?: ExpressionOverrideType;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{e as default};
