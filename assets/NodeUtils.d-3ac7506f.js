const e=`declare module 'three/examples/jsm/nodes/core/NodeUtils' {
import { NodeValueOption } from 'three/examples/jsm/nodes/core/constants';
import Node from 'three/examples/jsm/nodes/core/Node';

export function getNodesKeys(object: Node): string[];
export function getValueType(value: NodeValueOption): string | null;
export function getValueFromType(type: string, ...params: number[]): NodeValueOption | null;
export function getCacheKey(object: Node): string;

}`;export{e as default};
