const n=`declare module 'three/src/renderers/webgl/WebGLLights' {
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';

export class WebGLLights {
    constructor(extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    state: {
        version: number;

        hash: {
            directionalLength: number;
            pointLength: number;
            spotLength: number;
            rectAreaLength: number;
            hemiLength: number;

            numDirectionalShadows: number;
            numPointShadows: number;
            numSpotShadows: number;
        };

        ambient: number[];
        probe: any[];
        directional: any[];
        directionalShadow: any[];
        directionalShadowMap: any[];
        directionalShadowMatrix: any[];
        spot: any[];
        spotShadow: any[];
        spotShadowMap: any[];
        spotShadowMatrix: any[];
        rectArea: any[];
        point: any[];
        pointShadow: any[];
        pointShadowMap: any[];
        pointShadowMatrix: any[];
        hemi: any[];
    };

    get(light: any): any;
    setup(lights: any): void;
    setupView(lights: any, camera: any): void;
}

}`;export{n as default};