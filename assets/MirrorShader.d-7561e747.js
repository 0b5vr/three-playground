const r=`declare module 'three/examples/jsm/shaders/MirrorShader' {
import { IUniform } from 'three/src/Three';

export const MirrorShader: {
    uniforms: {
        tDiffuse: IUniform;
        side: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{r as default};
