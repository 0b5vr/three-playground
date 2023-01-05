const e=`declare module 'three/src/renderers/webgl/WebGLClipping' {
import { Camera } from 'three/src/cameras/Camera';
import { Material } from 'three/src/materials/Material';
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties';

export class WebGLClipping {
    constructor(properties: WebGLProperties);

    uniform: { value: any; needsUpdate: boolean };

    /**
     * @default 0
     */
    numPlanes: number;

    /**
     * @default 0
     */
    numIntersection: number;

    init(planes: any[], enableLocalClipping: boolean, camera: Camera): boolean;
    beginShadows(): void;
    endShadows(): void;
    setState(material: Material, camera: Camera, useCache: boolean): void;
}

}`;export{e as default};
