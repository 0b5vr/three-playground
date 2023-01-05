const e=`declare module 'three/examples/jsm/nodes/accessors/SkinningNode' {
import { SkinnedMesh } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class SkinningNode extends Node {
    skinIndexNode: Node;
    skinWeightNode: Node;

    bindMatrixNode: Node;
    bindMatrixInverseNode: Node;
    boneMatricesNode: Node;

    constructor(skinnedMesh: SkinnedMesh);
}

}`;export{e as default};
