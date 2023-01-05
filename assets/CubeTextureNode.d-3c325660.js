const e=`declare module 'three/examples/jsm/nodes/accessors/CubeTextureNode' {
import TextureNode from 'three/examples/jsm/nodes/accessors/TextureNode';
import { Node } from 'three/examples/jsm/nodes/Nodes';
import { CubeTexture } from 'three/src/Three';

export default class CubeTextureNode extends TextureNode {
    isCubeTextureNode: boolean;
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: CubeTexture, uvNode?: Node | null, levelNode?: Node | null);

    getDefaultUV(): Node;
}

}`;export{e as default};
