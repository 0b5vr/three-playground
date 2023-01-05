const e=`declare module 'three/examples/jsm/shaders/SobelOperatorShader' {
import { IUniform } from 'three/src/Three';

export const SobelOperatorShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
