const e=`declare module 'three/examples/jsm/nodes/loaders/NodeObjectLoader' {
import { NodeLoaderResult } from 'three/examples/jsm/nodes/loaders/NodeLoader';
import { Material, ObjectLoader, Texture } from 'three/src/Three';
import { AnyJson } from 'three/examples/jsm/nodes/core/constants';

export default class NodeObjectLoader extends ObjectLoader {
    parseNodes(json: AnyJson, textures: { [key: string]: Texture }): NodeLoaderResult;

    // tslint:disable-next-line:comment-format
    //@ts-expect-error
    parseMaterials(json: AnyJson, textures: { [key: string]: Texture }): { [key: string]: Material };
}

}`;export{e as default};
