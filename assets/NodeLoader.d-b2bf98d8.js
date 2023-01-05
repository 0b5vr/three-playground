const e=`declare module 'three/examples/jsm/nodes/loaders/NodeLoader' {
import { Loader, LoadingManager, Texture } from 'three/src/Three';
import { Node, AnyJson } from 'three/examples/jsm/nodes/Nodes';

export interface NodeLoaderResult {
    [hash: string]: Node;
}

export default class NodeLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (gltf: NodeLoaderResult) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;

    parseNodes(json: AnyJson): NodeLoaderResult;
    parse(json: AnyJson): Node;
    setTextures(textures: { [key: string]: Texture }): this;
}

}`;export{e as default};
