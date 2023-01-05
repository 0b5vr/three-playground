const e=`declare module 'three/src/renderers/webgl/WebGLAttributes' {
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';
import { BufferAttribute } from 'three/src/core/BufferAttribute';
import { InterleavedBufferAttribute } from 'three/src/core/InterleavedBufferAttribute';

export class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: WebGLCapabilities);

    get(attribute: BufferAttribute | InterleavedBufferAttribute): {
        buffer: WebGLBuffer;
        type: number;
        bytesPerElement: number;
        version: number;
    };

    remove(attribute: BufferAttribute | InterleavedBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute, bufferType: number): void;
}

}`;export{e as default};
