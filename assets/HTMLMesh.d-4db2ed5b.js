const e=`declare module 'three/examples/jsm/interactive/HTMLMesh' {
import { Mesh } from 'three';

export class HTMLMesh extends Mesh {
    constructor(dom: HTMLElement);
    dispose(): void;
}

}`;export{e as default};
