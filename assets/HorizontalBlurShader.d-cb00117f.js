const r=`declare module 'three/examples/jsm/shaders/HorizontalBlurShader' {
import { IUniform } from 'three/src/Three';

export const HorizontalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
