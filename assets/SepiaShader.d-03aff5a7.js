const e=`declare module 'three/examples/jsm/shaders/SepiaShader' {
import { IUniform } from 'three/src/Three';

export const SepiaShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
