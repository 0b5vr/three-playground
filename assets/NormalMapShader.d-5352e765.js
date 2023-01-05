const r=`declare module 'three/examples/jsm/shaders/NormalMapShader' {
import { IUniform } from 'three/src/Three';

export const NormalMapShader: {
    uniforms: {
        heightMap: IUniform;
        resolution: IUniform;
        scale: IUniform;
        height: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
