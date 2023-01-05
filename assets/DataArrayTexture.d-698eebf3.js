const e=`declare module 'three/src/textures/DataArrayTexture' {
import { Texture } from 'three/src/textures/Texture';
import { TextureFilter } from 'three/src/constants';

export class DataArrayTexture extends Texture {
    constructor(data?: BufferSource, width?: number, height?: number, depth?: number);

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
    wrapR: boolean;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isDataArrayTexture: true;
}

}`;export{e as default};
