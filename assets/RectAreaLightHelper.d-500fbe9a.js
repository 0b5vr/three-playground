const e=`declare module 'three/examples/jsm/helpers/RectAreaLightHelper' {
import { Line, RectAreaLight, ColorRepresentation } from 'three/src/Three';

export class RectAreaLightHelper extends Line {
    constructor(light: RectAreaLight, color?: ColorRepresentation);

    light: RectAreaLight;
    color: ColorRepresentation | undefined;

    dispose(): void;
}

}`;export{e as default};
