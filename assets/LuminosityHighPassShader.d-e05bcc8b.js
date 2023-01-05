const n=`declare module 'three/examples/jsm/shaders/LuminosityHighPassShader' {
import { IUniform } from 'three/src/Three';

export const LuminosityHighPassShader: {
    shaderID: string;
    uniforms: {
        tDiffuse: IUniform;
        luminosityThreshold: IUniform;
        smoothWidth: IUniform;
        defaultColor: IUniform;
        defaultOpacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{n as default};
