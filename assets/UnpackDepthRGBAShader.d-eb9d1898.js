const e=`declare module 'three/examples/jsm/shaders/UnpackDepthRGBAShader' {
import { IUniform } from 'three/src/Three';

export const UnpackDepthRGBAShader: {
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
