const e=`declare module 'three/examples/jsm/shaders/CopyShader' {
import { IUniform } from 'three/src/Three';

export const CopyShader: {
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
