const e=`declare module 'three/examples/jsm/nodes/accessors/TextureNode' {
import { Texture } from 'three/src/Three';
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode';
import { Node } from 'three/examples/jsm/nodes/Nodes';

export default class TextureNode extends UniformNode {
    isTextureNode: true;

    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: Texture, uvNode?: Node, levelNode?: Node | null);

    getDefaultUV(): Node;
}

}`;export{e as default};
