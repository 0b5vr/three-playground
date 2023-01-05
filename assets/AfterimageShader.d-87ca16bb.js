const e=`declare module 'three/examples/jsm/shaders/AfterimageShader' {
import { IUniform } from 'three/src/Three';

export const AfterimageShader: {
    uniforms: {
        damp: IUniform;
        tOld: IUniform;
        tNew: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
