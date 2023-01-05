const e=`declare module 'three/examples/jsm/shaders/FreiChenShader' {
import { IUniform } from 'three/src/Three';

export const FreiChenShader: {
    uniforms: {
        tDiffuse: IUniform;
        aspect: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
