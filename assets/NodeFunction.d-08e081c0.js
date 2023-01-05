const n=`declare module 'three/examples/jsm/nodes/core/NodeFunction' {
import NodeFunctionInput from 'three/examples/jsm/nodes/core/NodeFunctionInput';

export default abstract class NodeFunction {
    isNodeFunction: true;
    type: string;
    inputs: NodeFunctionInput[];
    name: string;
    presicion: string;

    constructor(type: string, inputs: NodeFunctionInput[], name?: string, presicion?: string);

    abstract getCode(name?: string): string;
}

}`;export{n as default};
