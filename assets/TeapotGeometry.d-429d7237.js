const e=`declare module 'three/examples/jsm/geometries/TeapotGeometry' {
import { BufferGeometry } from 'three/src/Three';

export class TeapotGeometry extends BufferGeometry {
    constructor(
        size?: number,
        segments?: number,
        bottom?: boolean,
        lid?: boolean,
        body?: boolean,
        fitLid?: boolean,
        blinn?: number,
    );
}

}`;export{e as default};
