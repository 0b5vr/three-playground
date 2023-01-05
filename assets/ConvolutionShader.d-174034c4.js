const n=`declare module 'three/examples/jsm/shaders/ConvolutionShader' {
import { IUniform } from 'three/src/Three';

export const ConvolutionShader: {
    defines: {
        KERNEL_SIZE_FLOAT: string;
        KERNEL_SIZE_INT: string;
    };
    uniforms: {
        tDiffuse: IUniform;
        uImageIncrement: IUniform;
        cKernel: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;

    buildKernel(sigma: number): number[];
};

}`;export{n as default};
