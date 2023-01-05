const e=`declare module 'three/examples/jsm/shaders/DotScreenShader' {
import { IUniform } from 'three/src/Three';

export const DotScreenShader: {
    uniforms: {
        tDiffuse: IUniform;
        tSize: IUniform;
        center: IUniform;
        angle: IUniform;
        scale: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
