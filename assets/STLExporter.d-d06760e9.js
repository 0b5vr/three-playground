const e=`declare module 'three/examples/jsm/exporters/STLExporter' {
import { Object3D } from 'three/src/Three';

export interface STLExporterOptions {
    binary?: boolean;
}

export class STLExporter {
    constructor();

    parse(scene: Object3D, options?: STLExporterOptions): string;
}

}`;export{e as default};
