const e=`declare module 'three/src/textures/FramebufferTexture' {
import { Texture } from 'three/src/textures/Texture';
import { PixelFormat } from 'three/src/constants';

export class FramebufferTexture extends Texture {
    readonly isFramebufferTexture: true;

    constructor(width: number, height: number, format: PixelFormat);
}

}`;export{e as default};
