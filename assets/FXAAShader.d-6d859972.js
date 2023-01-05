const e=`declare module 'three/examples/jsm/shaders/FXAAShader' {
import { IUniform } from 'three/src/Three';

export const FXAAShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
