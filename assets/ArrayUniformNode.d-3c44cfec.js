const e=`declare module 'three/examples/jsm/nodes/core/ArrayUniformNode' {
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class ArrayUniformNode extends UniformNode {
    isArrayUniformNode: true;
    nodes: Node[];
    constructor(nodes?: Node[]);
}

}`;export{e as default};
