const e=`declare module 'three/examples/jsm/nodes/core/FunctionNode' {
import CodeNode, { CodeNodeInclude } from 'three/examples/jsm/nodes/core/CodeNode';
import FunctionCallNode from 'three/examples/jsm/nodes/core/FunctionCallNode';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';
import NodeFunction from 'three/examples/jsm/nodes/core/NodeFunction';
import NodeFunctionInput from 'three/examples/jsm/nodes/core/NodeFunctionInput';
import Node from 'three/examples/jsm/nodes/core/Node';

export type FunctionNodeArguments = Node[] | { [name: string]: Node };

export default class FunctionNode<P extends Node[] | { [name: string]: Node }> extends CodeNode {
    keywords: { [key: string]: Node };
    constructor(code?: string, includes?: CodeNodeInclude[]);

    getInputs(builder: NodeBuilder): NodeFunctionInput[];
    getNodeFunction(builder: NodeBuilder): NodeFunction;
    call(parameters: P): FunctionCallNode<P>;
}

}`;export{e as default};
