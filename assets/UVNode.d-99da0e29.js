const e=`declare module 'three/examples/jsm/nodes/accessors/UVNode' {
import AttributeNode from 'three/examples/jsm/nodes/core/AttributeNode';

export default class UVNode extends AttributeNode {
    isUVNode: true;
    index: number;

    constructor(index?: number);
}

}`;export{e as default};
