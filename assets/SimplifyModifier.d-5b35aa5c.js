const e=`declare module 'three/examples/jsm/modifiers/SimplifyModifier' {
import { BufferGeometry } from 'three/src/Three';

export class SimplifyModifier {
    constructor();
    modify(geometry: BufferGeometry, count: number): BufferGeometry;
}

}`;export{e as default};
