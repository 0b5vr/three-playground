const e=`declare module 'three/examples/jsm/shaders/HueSaturationShader' {
import { IUniform } from 'three/src/Three';

export const HueSaturationShader: {
    uniforms: {
        tDiffuse: IUniform;
        hue: IUniform;
        saturation: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
