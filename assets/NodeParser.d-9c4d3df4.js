const e=`declare module 'three/examples/jsm/nodes/core/NodeParser' {
import Node from 'three/examples/jsm/nodes/core/Node';

export default abstract class NodeParser {
    abstract parseFunction(source: string): Node;
}

}`;export{e as default};
