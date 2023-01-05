const e=`declare module 'three/examples/jsm/interactive/InteractiveGroup' {
import { WebGLRenderer, Camera, Group } from 'three';

export class InteractiveGroup extends Group {
    constructor(renderer: WebGLRenderer, camera: Camera);
}

}`;export{e as default};
