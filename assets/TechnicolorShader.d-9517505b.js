const e=`declare module 'three/examples/jsm/shaders/TechnicolorShader' {
import { IUniform } from 'three/src/Three';

export const TechnicolorShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
