const e=`declare module 'three/examples/jsm/nodes/accessors/MaterialReferenceNode' {
import { Material } from 'three/src/Three';
import ReferenceNode from 'three/examples/jsm/nodes/accessors/ReferenceNode';

export default class MaterialReferenceNode extends ReferenceNode<Material | null> {
    constructor(property: string, inputType: string, material?: Material | null);
}

}`;export{e as default};
