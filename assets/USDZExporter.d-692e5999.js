const e=`declare module 'three/examples/jsm/exporters/USDZExporter' {
import { Object3D } from 'three/src/Three';

export class USDZExporter {
    constructor();

    parse(scene: Object3D): Promise<Uint8Array>;
}

}`;export{e as default};
