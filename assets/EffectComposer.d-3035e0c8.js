const e=`declare module 'three/examples/jsm/postprocessing/EffectComposer' {
import { Clock, WebGLRenderer, WebGLRenderTarget } from 'three/src/Three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
export { Pass };

export class EffectComposer {
    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
    renderer: WebGLRenderer;
    renderTarget1: WebGLRenderTarget;
    renderTarget2: WebGLRenderTarget;
    writeBuffer: WebGLRenderTarget;
    readBuffer: WebGLRenderTarget;
    passes: Pass[];
    copyPass: ShaderPass;
    clock: Clock;
    renderToScreen: boolean;

    swapBuffers(): void;
    addPass(pass: Pass): void;
    insertPass(pass: Pass, index: number): void;
    removePass(pass: Pass): void;
    isLastEnabledPass(passIndex: number): boolean;
    render(deltaTime?: number): void;
    reset(renderTarget?: WebGLRenderTarget): void;
    setSize(width: number, height: number): void;
    setPixelRatio(pixelRatio: number): void;
    dispose(): void;
}

}`;export{e as default};
