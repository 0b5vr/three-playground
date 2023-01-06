const e=`declare module '@pixiv/types-vrmc-vrm-1.0/Expressions' {
import type { Expression } from '@pixiv/types-vrmc-vrm-1.0/Expression';
import type { ExpressionPresetName } from '@pixiv/types-vrmc-vrm-1.0/ExpressionPresetName';
export interface Expressions {
    preset?: {
        [preset in ExpressionPresetName]?: Expression;
    };
    custom?: {
        [key: string]: Expression;
    };
}

}`;export{e as default};
