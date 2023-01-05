const e=`declare module 'three/examples/jsm/nodes/utils/SpriteSheetUVNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default class SpriteSheetUVNode extends Node {
    countNode: Node;
    uvNode: Node;
    frameNode: Node;

    constructor(countNode: Node, uvNode?: Node, frameNode?: Node);
}

}`;export{e as default};
