const e=`declare module 'three/examples/jsm/controls/DragControls' {
import { Camera, EventDispatcher, Object3D, Raycaster } from 'three/src/Three';

export class DragControls extends EventDispatcher {
    constructor(objects: Object3D[], camera: Camera, domElement?: HTMLElement);

    object: Camera;

    // API

    enabled: boolean;
    transformGroup: boolean;

    activate(): void;
    deactivate(): void;
    dispose(): void;
    getObjects(): Object3D[];
    getRaycaster(): Raycaster;
}

}`;export{e as default};
