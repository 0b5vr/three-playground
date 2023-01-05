const e=`declare module 'three/examples/jsm/nodes/math/OperatorNode' {
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export type OperatorNodeOp =
    | '='
    | '%'
    | '&'
    | '|'
    | '^'
    | '>>'
    | '<<'
    | '=='
    | '&&'
    | '||'
    | '^^'
    | '<'
    | '>'
    | '<='
    | '>='
    | '+'
    | '-'
    | '*'
    | '/';

export default class OperatorNode extends TempNode {
    aNode: Node;
    bNode: Node;
    op: OperatorNodeOp;

    constructor(op: OperatorNodeOp, ...params: [Node, Node, ...Node[]]);
}

}`;export{e as default};
