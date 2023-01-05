const r=`declare module 'three/examples/jsm/shaders/ColorCorrectionShader' {
import { IUniform } from 'three/src/Three';

export const ColorCorrectionShader: {
    uniforms: {
        tDiffuse: IUniform;
        powRGB: IUniform;
        mulRGB: IUniform;
        addRGB: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
