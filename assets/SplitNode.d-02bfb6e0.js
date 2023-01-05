const e=`declare module 'three/examples/jsm/nodes/utils/SplitNode' {
import { SwizzleOption } from 'three/examples/jsm/nodes/core/constants';
import Node from 'three/examples/jsm/nodes/core/Node';

/** swizzle node */
export default class SplitNode extends Node {
    node: Node;
    components: string;

    /**
     *
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
    constructor(node: Node, components?: SwizzleOption);
    getVectorLength(): number;
}

}`;export{e as default};
