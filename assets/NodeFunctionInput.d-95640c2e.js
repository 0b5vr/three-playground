const n=`declare module 'three/examples/jsm/nodes/core/NodeFunctionInput' {
export default class NodeFunctionInput {
    isNodeFunctionInput: true;
    count: null | number;
    qualifier: string;
    isConst: boolean;
    constructor(type: string, name: string, count?: number, qualifier?: string, isConst?: boolean);
}

}`;export{n as default};
