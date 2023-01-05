const n=`declare module 'three/examples/jsm/shaders/ToneMapShader' {
import { IUniform } from 'three/src/Three';

export const ToneMapShader: {
    uniforms: {
        tDiffuse: IUniform;
        averageLuminance: IUniform;
        luminanceMap: IUniform;
        maxLuminance: IUniform;
        minLuminance: IUniform;
        middleGrey: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{n as default};
