const e=`declare module 'three/examples/jsm/nodes/accessors/BufferNode' {
import { NodeTypeOption } from 'three/examples/jsm/nodes/core/constants';
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode';

export default class BufferNode extends UniformNode {
    isBufferNode: true;

    bufferType: string;
    bufferCount: number;

    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);
}

}`;export{e as default};
