const t=`declare module 'three/examples/jsm/nodes/core/NodeAttribute' {
export default class NodeAttribute {
    isNodeAttribute: true;
    name: string;
    type: string;
    constructor(name: string, type: string);
}

}`;export{t as default};
