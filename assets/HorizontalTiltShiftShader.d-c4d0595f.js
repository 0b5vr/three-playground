const r=`declare module 'three/examples/jsm/shaders/HorizontalTiltShiftShader' {
import { IUniform } from 'three/src/Three';

export const HorizontalTiltShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
