const e=`declare module 'three/examples/jsm/helpers/LightProbeHelper' {
import { LightProbe, Mesh } from 'three/src/Three';

export class LightProbeHelper extends Mesh {
    constructor(lightProbe: LightProbe, size: number);

    lightProbe: LightProbe;
    size: number;

    dispose(): void;
}

}`;export{e as default};
