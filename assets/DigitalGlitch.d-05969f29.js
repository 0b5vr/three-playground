const n=`declare module 'three/examples/jsm/shaders/DigitalGlitch' {
import { IUniform } from 'three/src/Three';

export const DigitalGlitch: {
    uniforms: {
        tDiffuse: IUniform;
        tDisp: IUniform;
        byp: IUniform;
        amount: IUniform;
        angle: IUniform;
        seed: IUniform;
        seed_x: IUniform;
        seed_y: IUniform;
        distortion_x: IUniform;
        distortion_y: IUniform;
        col_s: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{n as default};
