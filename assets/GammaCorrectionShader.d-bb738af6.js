const r=`declare module 'three/examples/jsm/shaders/GammaCorrectionShader' {
import { IUniform } from 'three/src/Three';

export const GammaCorrectionShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
