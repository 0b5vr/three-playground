const e=`declare module 'three/examples/jsm/objects/Lensflare' {
import { Mesh, Texture, Color } from 'three/src/Three';

export class LensflareElement {
    constructor(texture: Texture, size?: number, distance?: number, color?: Color);
    texture: Texture;
    size: number;
    distance: number;
    color: Color;
}

export class Lensflare extends Mesh {
    constructor();
    readonly isLensflare: true;

    addElement(element: LensflareElement): void;
    dispose(): void;
}

}`;export{e as default};
