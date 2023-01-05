const e=`declare module 'three/src/renderers/webgl/WebGLProgram' {
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { WebGLShader } from 'three/src/renderers/webgl/WebGLShader';
import { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms';

export class WebGLProgram {
    constructor(renderer: WebGLRenderer, cacheKey: string, parameters: object);

    name: string;
    id: number;
    cacheKey: string; // unique identifier for this program, used for looking up compiled programs from cache.

    /**
     * @default 1
     */
    usedTimes: number;
    program: any;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    /**
     * @deprecated Use {@link WebGLProgram#getUniforms getUniforms()} instead.
     */
    uniforms: any;
    /**
     * @deprecated Use {@link WebGLProgram#getAttributes getAttributes()} instead.
     */
    attributes: any;

    getUniforms(): WebGLUniforms;
    getAttributes(): any;
    destroy(): void;
}

}`;export{e as default};
