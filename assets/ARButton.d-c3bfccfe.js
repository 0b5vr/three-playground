const e=`declare module 'three/examples/jsm/webxr/ARButton' {
import { WebGLRenderer } from 'three/src/Three';

export interface ARButtonSessionInit extends XRSessionInit {
    domOverlay: { root: HTMLElement };
}

export namespace ARButton {
    function createButton(renderer: WebGLRenderer, sessionInit?: Partial<ARButtonSessionInit>): HTMLElement;
}

}`;export{e as default};
