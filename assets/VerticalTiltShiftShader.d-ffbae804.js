const r=`declare module 'three/examples/jsm/shaders/VerticalTiltShiftShader' {
import { IUniform } from 'three/src/Three';

export const VerticalTiltShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
