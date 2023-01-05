const e=`declare module 'three/examples/jsm/nodes/core/NodeKeywords' {
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class NodeKeywords {
    keywords: string[];
    nodes: Node[];
    keywordsCallback: { [name: string]: (name: string) => Node };

    getNode(name: string): Node;
    addKeyword(name: string, callback: (name: string) => Node): void;

    parse(code: string): Node[];
    include(builder: NodeBuilder, code: string): void;
}

}`;export{e as default};
