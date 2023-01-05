const r=`declare module 'three/examples/jsm/shaders/WaterRefractionShader' {
import { IUniform } from 'three/src/Three';

export const WaterRefractionShader: {
    uniforms: {
        color: IUniform;
        time: IUniform;
        tDiffuse: IUniform;
        tDudv: IUniform;
        textureMatrix: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
