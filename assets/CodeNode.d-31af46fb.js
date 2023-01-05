const e=`declare module 'three/examples/jsm/nodes/core/CodeNode' {
import { NodeTypeOption } from 'three/examples/jsm/nodes/core/constants';
import Node from 'three/examples/jsm/nodes/core/Node';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';

export interface CodeNodeInclude {
    build(builder: NodeBuilder): void;
}

export default class CodeNode extends Node {
    isCodeNode: true;
    code: string;
    constructor(code?: string, includes?: CodeNodeInclude[]);

    setIncludes(includes: CodeNodeInclude[]): this;
    getIncludes(builder: NodeBuilder): CodeNodeInclude[];
}

}`;export{e as default};
