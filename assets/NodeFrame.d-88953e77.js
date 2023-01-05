const e=`declare module 'three/examples/jsm/nodes/core/NodeFrame' {
import { Camera, Material, Object3D, Renderer } from 'three/src/Three';

import Node from 'three/examples/jsm/nodes/core/Node';

export default class NodeFrame {
    time: number;
    deltaTime: number;
    frameId: number;
    startTime: null | number;
    renderer: null | Renderer;
    material: null | Material;
    camera: null | Camera;
    object: null | Object3D;

    constructor();

    updateNode(node: Node): void;
    update(): void;
}

}`;export{e as default};
