const e=`declare module 'three/examples/jsm/shaders/FocusShader' {
import { IUniform } from 'three/src/Three';

export const FocusShader: {
    uniforms: {
        tDiffuse: IUniform;
        screenWidth: IUniform;
        screenHeight: IUniform;
        sampleDistance: IUniform;
        waveFactor: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
