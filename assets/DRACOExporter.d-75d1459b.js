const e=`declare module 'three/examples/jsm/exporters/DRACOExporter' {
import { Mesh, Points } from 'three/src/Three';

export interface DRACOExporterOptions {
    decodeSpeed?: number;
    encodeSpeed?: number;
    encoderMethod?: number;
    quantization?: number[];
    exportUvs?: boolean;
    exportNormals?: boolean;
    exportColor?: boolean;
}

export class DRACOExporter {
    constructor();

    parse(object: Mesh | Points, options: DRACOExporterOptions): Int8Array;
}

}`;export{e as default};
