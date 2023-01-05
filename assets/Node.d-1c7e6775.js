const e=`declare module 'three/examples/jsm/nodes/core/Node' {
import { AnyJson, NodeTypeOption, NodeUpdateTypeOption } from 'three/examples/jsm/nodes/core/constants';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';
import NodeFrame from 'three/examples/jsm/nodes/core/NodeFrame';

export default abstract class Node {
    uuid: string;
    type: string;
    isNode: true;
    nodeType: NodeTypeOption | null;
    updateType: NodeUpdateTypeOption;
    id: number;

    constructor(nodeType?: NodeTypeOption | null);

    isGlobal(builder: NodeBuilder): boolean;
    getChildren(): Node[];
    getHash(builder: NodeBuilder): string;
    getUpdateType(builder: NodeBuilder): NodeUpdateTypeOption;
    getNodeType(builder: NodeBuilder, output?: string | null): NodeTypeOption | null;
    getReference(builder: NodeBuilder): Node;
    construct(builder: NodeBuilder): Node | null;
    analyze(builder: NodeBuilder): void;
    generate(builder: NodeBuilder, output?: string | null): string;
    /** This method must be overriden when {@link updateType} !== 'none' */
    update(frame: NodeFrame): void;
    build(builder: NodeBuilder, output?: string | null): string;
    serialize(json: AnyJson): void;
    deserialize(json: AnyJson): void;
    toJSON(meta?: string | { textures: {}; images: {}; nodes: {} }): AnyJson;
    getCacheKey(): string;
}

}`;export{e as default};
