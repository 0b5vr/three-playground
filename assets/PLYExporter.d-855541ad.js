const e=`declare module 'three/examples/jsm/exporters/PLYExporter' {
import { Object3D } from 'three/src/Three';

export interface PLYExporterOptions {
    binary?: boolean;
    excludeAttributes?: string[];
    littleEndian?: boolean;
}

export class PLYExporter {
    constructor();

    parse(object: Object3D, onDone: (res: string) => void, options: PLYExporterOptions): string | null;
}

}`;export{e as default};
