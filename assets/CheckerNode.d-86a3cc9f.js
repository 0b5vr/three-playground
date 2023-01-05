const e=`declare module 'three/examples/jsm/nodes/procedural/CheckerNode' {
import TempNode from 'three/examples/jsm/nodes/core/TempNode';

export default class CheckerNode extends TempNode {
    uvNode: Node;
    constructor(uvNode?: Node);
}

}`;export{e as default};
