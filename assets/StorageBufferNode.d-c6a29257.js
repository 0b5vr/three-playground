const e=`declare module 'three/examples/jsm/nodes/accessors/StorageBufferNode' {
import { NodeTypeOption } from 'three/examples/jsm/nodes/Nodes';
import BufferNode from 'three/examples/jsm/nodes/accessors/BufferNode';

export default class StorageBufferNode extends BufferNode {
    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);
}

}`;export{e as default};
