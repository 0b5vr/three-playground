const e=`declare module 'three/examples/jsm/utils/GeometryCompressionUtils' {
import { Mesh } from 'three/src/Three';

export function compressNormals(mesh: Mesh, encodeMethod: string): void;
export function compressPositions(mesh: Mesh): void;
export function compressUvs(mesh: Mesh): void;

}`;export{e as default};
