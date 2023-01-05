const n=`declare module 'three/src/lights/LightProbe' {
import { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3';
import { Light } from 'three/src/lights/Light';

export class LightProbe extends Light {
    constructor(sh?: SphericalHarmonics3, intensity?: number);

    /**
     * @default 'LightProbe'
     */
    type: string;

    readonly isLightProbe: true;

    /**
     * @default new THREE.SphericalHarmonics3()
     */
    sh: SphericalHarmonics3;

    fromJSON(json: object): LightProbe;
}

}`;export{n as default};
