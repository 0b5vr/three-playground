const e=`declare module 'three/examples/jsm/nodes/accessors/InstanceNode' {
import { InstancedMesh } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class InstanceNode extends Node {
    instanceMesh: InstancedMesh;
    instanceMatrixNode: Node;

    constructor(instanceMesh: InstancedMesh);
}

}`;export{e as default};
