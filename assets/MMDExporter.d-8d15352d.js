const e=`declare module 'three/examples/jsm/exporters/MMDExporter' {
import { Object3D } from 'three/src/Three';

export class MMDExporter {
    constructor();

    parseVpd(skin: Object3D, outputShiftJis: boolean, useOriginalBones: boolean): [] | Uint8Array;
}

}`;export{e as default};
