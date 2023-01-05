const r=`declare module 'three/examples/jsm/shaders/BrightnessContrastShader' {
import { IUniform } from 'three/src/Three';

export const BrightnessContrastShader: {
    uniforms: {
        tDiffuse: IUniform;
        brightness: IUniform;
        contrast: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
