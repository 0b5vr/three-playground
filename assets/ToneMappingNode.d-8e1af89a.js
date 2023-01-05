const e=`declare module 'three/examples/jsm/nodes/display/ToneMappingNode' {
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import Node from 'three/examples/jsm/nodes/core/Node';
import { ToneMapping } from 'three/src/Three';

// exposure only
export const LinearToneMappingNode: Node;

export default class ToneMappingNode extends TempNode {
    toneMapping: ToneMapping;
    exposureNode: Node;
    colorNode: Node | null;

    constructor(toneMapping: ToneMapping, exposureNode?: Node, colorNode?: Node | null);
}

}`;export{e as default};
