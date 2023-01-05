const e=`declare module 'three/examples/jsm/shaders/RGBShiftShader' {
import { IUniform } from 'three/src/Three';

export const RGBShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
