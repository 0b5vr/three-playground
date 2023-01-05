const t=`declare module 'three/examples/jsm/nodes/lighting/PunctualLightNode' {
import AnalyticLightNode from 'three/examples/jsm/nodes/lighting/AnalyticLightNode';
import Node from 'three/examples/jsm/nodes/core/Node';
import { PointLight, SpotLight } from 'three/src/Three';

export type PunctualLight = PointLight | SpotLight;

export default class PunctualLightNode extends AnalyticLightNode<PunctualLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PunctualLight | null);
}

}`;export{t as default};
