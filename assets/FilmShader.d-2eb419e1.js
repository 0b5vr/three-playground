const n=`declare module 'three/examples/jsm/shaders/FilmShader' {
import { IUniform } from 'three/src/Three';

export const FilmShader: {
    uniforms: {
        tDiffuse: IUniform;
        time: IUniform;
        nIntensity: IUniform;
        sIntensity: IUniform;
        sCount: IUniform;
        grayscale: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{n as default};
