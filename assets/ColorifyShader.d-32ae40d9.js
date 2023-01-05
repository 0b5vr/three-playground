const r=`declare module 'three/examples/jsm/shaders/ColorifyShader' {
import { IUniform } from 'three/src/Three';

export const ColorifyShader: {
    uniforms: {
        tDiffuse: IUniform;
        color: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
