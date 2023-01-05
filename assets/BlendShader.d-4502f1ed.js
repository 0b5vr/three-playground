const e=`declare module 'three/examples/jsm/shaders/BlendShader' {
import { IUniform } from 'three/src/Three';

export const BlendShader: {
    uniforms: {
        tDiffuse1: IUniform;
        tDiffuse2: IUniform;
        mixRatio: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
