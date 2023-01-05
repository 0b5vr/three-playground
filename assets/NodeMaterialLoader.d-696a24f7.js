const e=`declare module 'three/examples/jsm/nodes/loaders/NodeMaterialLoader' {
import { MaterialLoader } from 'three/src/Three';
import { NodeLoaderResult } from 'three/examples/jsm/nodes/loaders/NodeLoader';

export default class NodeMaterialLoader extends MaterialLoader {
    nodes: NodeLoaderResult;

    setNodes(value: NodeLoaderResult): this;
}

}`;export{e as default};
