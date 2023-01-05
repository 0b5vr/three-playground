const r=`declare module 'three/examples/jsm/shaders/DOFMipMapShader' {
import { IUniform } from 'three/src/Three';

export const DOFMipMapShader: {
    uniforms: {
        tColor: IUniform;
        tDepth: IUniform;
        focus: IUniform;
        maxblur: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
