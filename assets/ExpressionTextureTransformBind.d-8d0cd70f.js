const n=`declare module '@pixiv/types-vrmc-vrm-1.0/ExpressionTextureTransformBind' {
export interface ExpressionTextureTransformBind {
    /**
     * target material
     */
    material: number;
    /**
     * uv scale for TEXCOORD_0
     */
    scale?: [number, number];
    /**
     * uv offset for TEXCOORD_0
     */
    offset?: [number, number];
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
