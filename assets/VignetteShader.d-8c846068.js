const e=`declare module 'three/examples/jsm/shaders/VignetteShader' {
import { IUniform } from 'three/src/Three';

export const VignetteShader: {
    uniforms: {
        tDiffuse: IUniform;
        offset: IUniform;
        darkness: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
