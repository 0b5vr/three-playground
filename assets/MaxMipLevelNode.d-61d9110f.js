const e=`declare module 'three/examples/jsm/nodes/utils/MaxMipLevelNode' {
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode';
import { Texture } from 'three/src/Three';
import { TextureNode } from 'three/examples/jsm/nodes/Nodes';

export default class MaxMipLevelNode extends UniformNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);

    get texture(): Texture;
}

}`;export{e as default};
