const e=`declare module 'three/examples/jsm/nodes/core/FunctionCallNode' {
import FunctionNode from 'three/examples/jsm/nodes/core/FunctionNode';
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class FunctionCallNode<P extends Node[] | { [name: string]: Node }> extends TempNode {
    functionNode: FunctionNode<P>;
    parameters: { [name: string]: Node };

    constructor(functionNode?: FunctionNode<P>, parameters?: P);

    setParameters(parameters: P): this;
    getParameters(): P;
}

}`;export{e as default};
