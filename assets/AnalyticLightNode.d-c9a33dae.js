const e=`declare module 'three/examples/jsm/nodes/lighting/AnalyticLightNode' {
import LightingNode from 'three/examples/jsm/nodes/lighting/LightingNode';
import { Light } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class AnalyticLightNode<T extends Light> extends LightingNode {
    light: T | null;
    colorNode: Node;

    constructor(light?: T | null);
}

}`;export{e as default};
