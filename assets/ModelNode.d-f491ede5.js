const e=`declare module 'three/examples/jsm/nodes/accessors/ModelNode' {
import { NodeFrame } from 'three/examples/jsm/nodes/Nodes';
import Object3DNode, { Object3DNodeScope } from 'three/examples/jsm/nodes/accessors/Object3DNode';

/**
 * Similar to {@link Object3DNode} but the object comes from {@link NodeFrame}
 */
export default class ModelNode extends Object3DNode {
    constructor(scope?: Object3DNodeScope);
}

}`;export{e as default};
