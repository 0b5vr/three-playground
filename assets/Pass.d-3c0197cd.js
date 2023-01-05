const e=`declare module 'three/examples/jsm/postprocessing/Pass' {
import { Material, WebGLRenderer, WebGLRenderTarget } from 'three/src/Three';

export class Pass {
    constructor();
    enabled: boolean;
    needsSwap: boolean;
    clear: boolean;
    renderToScreen: boolean;

    setSize(width: number, height: number): void;
    render(
        renderer: WebGLRenderer,
        writeBuffer: WebGLRenderTarget,
        readBuffer: WebGLRenderTarget,
        deltaTime: number,
        maskActive: boolean,
    ): void;

    dispose(): void;
}

export class FullScreenQuad {
    constructor(material?: Material);

    render(renderer: WebGLRenderer): void;
    dispose(): void;

    material: Material;
}

}`;export{e as default};
