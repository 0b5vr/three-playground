const r=`declare module 'three/examples/jsm/shaders/VerticalBlurShader' {
import { IUniform } from 'three/src/Three';

export const VerticalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
