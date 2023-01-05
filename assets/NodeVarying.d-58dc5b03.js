const e=`declare module 'three/examples/jsm/nodes/core/NodeVarying' {
import NodeVar from 'three/examples/jsm/nodes/core/NodeVar';

export default class NodeVarying extends NodeVar {
    needsInterpolation: false;
    isNodeVarying: true;

    constructor(name: string, type: string);
}

}`;export{e as default};
