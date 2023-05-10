const e=`declare module 'three/examples/jsm/helpers/ViewHelper' {
import { Object3D, Vector3, WebGLRenderer } from 'three/src/Three';
import { Octree } from 'three/examples/jsm/math/Octree';

export class ViewHelper extends Object3D {
    animating: boolean;
    center: Vector3;

    readonly isViewHelper: true;

    constructor(camera: Octree, domElement: HTMLElement);

    render(renderer: WebGLRenderer): void;
    handleClick(event: PointerEvent): boolean;
    update(delta: number): void;
    dispose(): void;
}

}`;export{e as default};
