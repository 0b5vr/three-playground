const n=`declare module 'three/examples/jsm/utils/GeometryUtils' {
import { Vector3 } from 'three/src/Three';

export function hilbert2D(
    center?: Vector3,
    size?: number,
    iterations?: number,
    v0?: number,
    v1?: number,
    v2?: number,
    v3?: number,
): Vector3[];
export function hilbert3D(
    center?: Vector3,
    size?: number,
    iterations?: number,
    v0?: number,
    v1?: number,
    v2?: number,
    v3?: number,
    v4?: number,
    v5?: number,
    v6?: number,
    v7?: number,
): Vector3[];
export function gosper(size?: number): number[];

}`;export{n as default};
