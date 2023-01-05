const e=`declare module 'three/examples/jsm/shaders/ACESFilmicToneMappingShader' {
import { IUniform, Texture } from 'three/src/Three';

export const ACESFilmicToneMappingShader: {
    uniforms: {
        tDiffuse: IUniform<Texture>;
        exposure: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
