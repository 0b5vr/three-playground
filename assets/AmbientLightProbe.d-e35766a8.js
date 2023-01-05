const e=`declare module 'three/src/lights/AmbientLightProbe' {
import { ColorRepresentation } from 'three/src/utils';
import { LightProbe } from 'three/src/lights/LightProbe';

export class AmbientLightProbe extends LightProbe {
    constructor(color?: ColorRepresentation, intensity?: number);

    readonly isAmbientLightProbe: true;
}

}`;export{e as default};
