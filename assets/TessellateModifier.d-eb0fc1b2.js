const e=`declare module 'three/examples/jsm/modifiers/TessellateModifier' {
import { BufferGeometry } from 'three/src/Three';

export class TessellateModifier {
    constructor(maxEdgeLength?: number, maxIterations?: number);
    maxEdgeLength: number;
    maxIterations: number;

    modify<TGeometry extends BufferGeometry>(geometry: TGeometry): TGeometry;
}

}`;export{e as default};
