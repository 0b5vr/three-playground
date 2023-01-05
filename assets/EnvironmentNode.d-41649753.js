const e=`declare module 'three/examples/jsm/nodes/lighting/EnvironmentNode' {
import LightingNode from 'three/examples/jsm/nodes/lighting/LightingNode';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class EnvironmentNode extends LightingNode {
    envNode: Node | null;

    constructor(envNode?: Node | null);
}

}`;export{e as default};
