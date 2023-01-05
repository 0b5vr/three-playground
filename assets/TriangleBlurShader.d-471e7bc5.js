const r=`declare module 'three/examples/jsm/shaders/TriangleBlurShader' {
import { IUniform } from 'three/src/Three';

export const TriangleBlurShader: {
    uniforms: {
        texture: IUniform;
        delta: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
