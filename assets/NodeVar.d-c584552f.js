const e=`declare module 'three/examples/jsm/nodes/core/NodeVar' {
export default class NodeVar {
    isNodeVar: true;
    name: string;
    type: string;
    constructor(name: string, type: string);
}

}`;export{e as default};
