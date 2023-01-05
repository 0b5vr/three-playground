const e=`declare module 'three/examples/jsm/nodes/lighting/LightsNode' {
import { Light } from 'three/src/Three';
import Node from 'three/examples/jsm/nodes/core/Node';
import LightingNode from 'three/examples/jsm/nodes/lighting/LightingNode';

export default class LightsNode extends Node {
    lightNodes: LightingNode[];

    constructor(lightNodes?: LightingNode[]);

    get hasLight(): boolean;
    getLightNodeByHash(hash: string): LightingNode | null;

    fromLights(lights: Light[]): this;

    static setReference<T extends Light>(
        lightClass: { new (): T },
        lightNodeClass: { new (light: T): LightingNode },
    ): void;
}

}`;export{e as default};
