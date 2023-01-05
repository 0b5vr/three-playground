const e=`declare module 'three/examples/jsm/nodes/core/ExpressionNode' {
import { NodeTypeOption } from 'three/examples/jsm/nodes/core/constants';
import TempNode from 'three/examples/jsm/nodes/core/TempNode';

export default class ExpressionNode extends TempNode {
    snipped: string; /* sic */
    constructor(snipped?: string, nodeType?: NodeTypeOption);
}

}`;export{e as default};
