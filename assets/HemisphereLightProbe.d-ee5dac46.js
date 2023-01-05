const e=`declare module 'three/src/lights/HemisphereLightProbe' {
import { ColorRepresentation } from 'three/src/utils';
import { LightProbe } from 'three/src/lights/LightProbe';

export class HemisphereLightProbe extends LightProbe {
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    readonly isHemisphereLightProbe: true;
}

}`;export{e as default};
