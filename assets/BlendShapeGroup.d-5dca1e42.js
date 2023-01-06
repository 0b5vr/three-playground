const e=`declare module '@pixiv/types-vrm-0.0/BlendShapeGroup' {
import type { BlendShapeBind } from '@pixiv/types-vrm-0.0/BlendShapeBind';
import type { BlendShapeMaterialbind } from '@pixiv/types-vrm-0.0/BlendShapeMaterialBind';
import type { BlendShapePresetName } from '@pixiv/types-vrm-0.0/BlendShapePresetName';
export interface BlendShapeGroup {
    /**
     * Expression name
     */
    name?: string;
    /**
     * Predefined Expression name
     */
    presetName?: BlendShapePresetName;
    /**
     * Low level blendshape references.
     */
    binds?: BlendShapeBind[];
    /**
     * Material animation references.
     */
    materialValues?: BlendShapeMaterialbind[];
    /**
     * 0 or 1. Do not allow an intermediate value. Value should rounded
     */
    isBinary?: boolean;
}

}`;export{e as default};
