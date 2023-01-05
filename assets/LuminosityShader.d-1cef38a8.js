const e=`declare module 'three/examples/jsm/shaders/LuminosityShader' {
import { IUniform } from 'three/src/Three';

export const LuminosityShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
