const e=`declare module 'three/src/textures/Data3DTexture' {
import { Texture } from 'three/src/textures/Texture';
import { TextureFilter, Wrapping } from 'three/src/constants';

export class Data3DTexture extends Texture {
    constructor(data: BufferSource, width: number, height: number, depth: number);

    /**
     * @default THREE.NearestFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.NearestFilter
     */
    minFilter: TextureFilter;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapR: Wrapping;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isData3DTexture: true;
}

}`;export{e as default};
