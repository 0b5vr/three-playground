const e=`declare module 'three/examples/jsm/nodes/lighting/AONode' {
import LightingNode from 'three/examples/jsm/nodes/lighting/LightingNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class AONode extends LightingNode {
    aoNode: Node | null;

    constructor(aoNode?: Node | null);
}

}`;export{e as default};
