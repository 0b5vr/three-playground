const e=`declare module 'three/src/extras/ImageUtils' {
import { Mapping } from 'three/src/constants';
import { Texture } from 'three/src/textures/Texture';

export namespace ImageUtils {
    function getDataURL(image: any): string;

    /**
     * @deprecated
     */
    let crossOrigin: string;

    /**
     * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
     */
    function loadTexture(
        url: string,
        mapping?: Mapping,
        onLoad?: (texture: Texture) => void,
        onError?: (message: string) => void,
    ): Texture;

    /**
     * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
     */
    function loadTextureCube(
        array: string[],
        mapping?: Mapping,
        onLoad?: (texture: Texture) => void,
        onError?: (message: string) => void,
    ): Texture;

    function sRGBToLinear(image: any): HTMLCanvasElement | { data: number[]; width: number; height: number };
}

}`;export{e as default};
