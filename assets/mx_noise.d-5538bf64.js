const e=`declare module 'three/examples/jsm/nodes/materialx/lib/mx_noise' {
import { Fn, Node, Swizzable } from 'three/examples/jsm/nodes/Nodes';

export function mx_perlin_noise_float(...params: Fn<[Node]>): Swizzable;
export function mx_cell_noise_float(...params: Fn<[Node]>): Swizzable;
export function mx_worley_noise_float(...params: Fn<[Node]>): Swizzable;
export function mx_fractal_noise_float(...params: Fn<[Node, Node, Node, Node]>): Swizzable;

}`;export{e as default};
