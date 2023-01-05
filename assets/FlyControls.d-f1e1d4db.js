const e=`declare module 'three/examples/jsm/controls/FlyControls' {
import { Camera, EventDispatcher } from 'three/src/Three';

export class FlyControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement | Document;

    movementSpeed: number;
    rollSpeed: number;
    dragToLook: boolean;
    autoForward: boolean;

    update(delta: number): void;
    dispose(): void;
}

}`;export{e as default};
