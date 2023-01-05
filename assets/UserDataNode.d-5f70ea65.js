const e=`declare module 'three/examples/jsm/nodes/accessors/UserDataNode' {
import { NodeTypeOption, NodeUserData } from 'three/examples/jsm/nodes/core/constants';
import ReferenceNode from 'three/examples/jsm/nodes/accessors/ReferenceNode';

export default class UserDataNode extends ReferenceNode<NodeUserData> {
    userData: NodeUserData | null;
    constructor(property: string, inputType: NodeTypeOption, userData?: NodeUserData | null);
}

}`;export{e as default};
