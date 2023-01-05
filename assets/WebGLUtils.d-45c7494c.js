const e=`declare module 'three/src/renderers/webgl/WebGLUtils' {
import { CompressedPixelFormat, PixelFormat, TextureEncoding, TextureDataType } from 'three/src/constants';

export class WebGLUtils {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, extensions: any, capabilities: any);

    convert(p: PixelFormat | CompressedPixelFormat | TextureDataType, encoding?: TextureEncoding | null): number | null;
}

}`;export{e as default};
