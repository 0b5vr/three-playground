const e=`declare module 'three/examples/jsm/shaders/KaleidoShader' {
import { IUniform } from 'three/src/Three';

export const KaleidoShader: {
    uniforms: {
        tDiffuse: IUniform;
        sides: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
