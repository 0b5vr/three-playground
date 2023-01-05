const e=`declare module 'three/examples/jsm/nodes/gpgpu/ComputeNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class ComputeNode extends Node {
    isComputeNode: true;

    count: number;
    workgroupSize: number[];
    dispatchCount: number;

    constructor(computeNode: Node, count: number, workgroupSize?: number[]);
}

}`;export{e as default};
