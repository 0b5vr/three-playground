const e=`declare module 'three/examples/jsm/objects/Reflector' {
import {
    Mesh,
    BufferGeometry,
    ColorRepresentation,
    TextureEncoding,
    WebGLRenderTarget,
    PerspectiveCamera,
} from '../../../src/Three';

export interface ReflectorOptions {
    color?: ColorRepresentation;
    textureWidth?: number;
    textureHeight?: number;
    clipBias?: number;
    shader?: object;
    encoding?: TextureEncoding;
    multisample?: number;
}

export class Reflector extends Mesh {
    type: 'Reflector';
    camera: PerspectiveCamera;

    constructor(geometry?: BufferGeometry, options?: ReflectorOptions);

    getRenderTarget(): WebGLRenderTarget;

    dispose(): void;
}

}`;export{e as default};
