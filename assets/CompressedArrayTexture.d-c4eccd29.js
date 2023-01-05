const e=`declare module 'three/src/textures/CompressedArrayTexture' {
import { CompressedPixelFormat, TextureDataType, Wrapping } from 'three/src/constants';
import { CompressedTexture } from 'three/src/textures/CompressedTexture.js';

export class CompressedArrayTexture extends CompressedTexture {
    isCompressedArrayTexture: true;

    wrapR: Wrapping;

    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        depth: number,
        format?: CompressedPixelFormat,
        type?: TextureDataType,
    );
}

}`;export{e as default};
