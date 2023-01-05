const e=`declare module 'three/src/renderers/WebGLRenderTarget' {
import { Vector4 } from 'three/src/math/Vector4';
import { Texture } from 'three/src/textures/Texture';
import { DepthTexture } from 'three/src/textures/DepthTexture';
import { EventDispatcher } from 'three/src/core/EventDispatcher';
import { Wrapping, TextureFilter, TextureDataType, TextureEncoding } from 'three/src/constants';

export interface WebGLRenderTargetOptions {
    wrapS?: Wrapping | undefined;
    wrapT?: Wrapping | undefined;
    magFilter?: TextureFilter | undefined;
    minFilter?: TextureFilter | undefined;
    format?: number | undefined; // RGBAFormat;
    type?: TextureDataType | undefined; // UnsignedByteType;
    anisotropy?: number | undefined; // 1;
    depthBuffer?: boolean | undefined; // true;
    stencilBuffer?: boolean | undefined; // false;
    generateMipmaps?: boolean | undefined; // true;
    depthTexture?: DepthTexture | undefined;
    encoding?: TextureEncoding | undefined;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples?: number;
}

export class WebGLRenderTarget extends EventDispatcher {
    constructor(width?: number, height?: number, options?: WebGLRenderTargetOptions);

    width: number;
    height: number;
    depth: number;

    scissor: Vector4;
    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
    texture: Texture;

    /**
     * @default true
     */
    depthBuffer: boolean;

    /**
     * @default true
     */
    stencilBuffer: boolean;

    /**
     * @default null
     */
    depthTexture: DepthTexture;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    readonly isWebGLRenderTarget: true;

    /**
     * @deprecated Use {@link Texture#wrapS texture.wrapS} instead.
     */
    wrapS: any;
    /**
     * @deprecated Use {@link Texture#wrapT texture.wrapT} instead.
     */
    wrapT: any;
    /**
     * @deprecated Use {@link Texture#magFilter texture.magFilter} instead.
     */
    magFilter: any;
    /**
     * @deprecated Use {@link Texture#minFilter texture.minFilter} instead.
     */
    minFilter: any;
    /**
     * @deprecated Use {@link Texture#anisotropy texture.anisotropy} instead.
     */
    anisotropy: any;
    /**
     * @deprecated Use {@link Texture#offset texture.offset} instead.
     */
    offset: any;
    /**
     * @deprecated Use {@link Texture#repeat texture.repeat} instead.
     */
    repeat: any;
    /**
     * @deprecated Use {@link Texture#format texture.format} instead.
     */
    format: any;
    /**
     * @deprecated Use {@link Texture#type texture.type} instead.
     */
    type: any;
    /**
     * @deprecated Use {@link Texture#generateMipmaps texture.generateMipmaps} instead.
     */
    generateMipmaps: any;

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: WebGLRenderTarget): this;
    dispose(): void;
}

}`;export{e as default};
