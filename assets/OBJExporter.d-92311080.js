const e=`declare module 'three/examples/jsm/exporters/OBJExporter' {
import { Object3D } from 'three/src/Three';

export class OBJExporter {
    constructor();

    parse(object: Object3D): string;
}

}`;export{e as default};
