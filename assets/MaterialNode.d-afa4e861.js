const e=`declare module 'three/examples/jsm/nodes/accessors/MaterialNode' {
import Node from 'three/examples/jsm/nodes/core/Node';

export type MaterialNodeScope =
    | typeof MaterialNode.ALPHA_TEST
    | typeof MaterialNode.COLOR
    | typeof MaterialNode.OPACITY
    | typeof MaterialNode.ROUGHNESS
    | typeof MaterialNode.METALNESS
    | typeof MaterialNode.EMISSIVE
    | typeof MaterialNode.ROTATION;

export default class MaterialNode extends Node {
    static ALPHA_TEST: 'alphaTest';
    static COLOR: 'color';
    static OPACITY: 'opacity';
    static ROUGHNESS: 'roughness';
    static METALNESS: 'metalness';
    static EMISSIVE: 'emissive';
    static ROTATION: 'rotation';

    scope: MaterialNodeScope;
    constructor(scope?: MaterialNodeScope);
}

}`;export{e as default};
