const e=`declare module 'three/examples/jsm/nodes/utils/OscNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export type OscNodeMethod =
    | typeof OscNode.SINE
    | typeof OscNode.SQUARE
    | typeof OscNode.TRIANGLE
    | typeof OscNode.SAWTOOTH;

export default class OscNode extends Node {
    static SINE: 'sine';
    static SQUARE: 'square';
    static TRIANGLE: 'triangle';
    static SAWTOOTH: 'sawtooth';

    method: OscNodeMethod;
    timeNode: Node;

    constructor(method: OscNodeMethod, timeNode?: Node);
}

}`;export{e as default};
