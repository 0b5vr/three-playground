const e=`declare module 'three/examples/jsm/nodes/lighting/HemisphereLightNode' {
import AnalyticLightNode from 'three/examples/jsm/nodes/lighting/AnalyticLightNode';
import Object3DNode from 'three/examples/jsm/nodes/accessors/Object3DNode';
import { HemisphereLight } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';

export default class HemisphereLightNode extends AnalyticLightNode<HemisphereLight> {
    lightPositionNode: Object3DNode;
    lightDirectionNode: Node;

    groundColorNode: Node;

    constructor(light?: HemisphereLight | null);
}

}`;export{e as default};
