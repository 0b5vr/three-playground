const e=`declare module 'three/examples/jsm/shaders/DepthLimitedBlurShader' {
import { IUniform, Vector2, Material } from 'three/src/Three';

export const DepthLimitedBlurShader: {
    defines: {
        KERNEL_RADIUS: number;
        DEPTH_PACKING: number;
        PERSPECTIVE_CAMERA: number;
    };
    uniforms: {
        tDiffuse: IUniform;
        size: IUniform;
        sampleUvOffsets: IUniform;
        sampleWeights: IUniform;
        tDepth: IUniform;
        cameraNear: IUniform;
        cameraFar: IUniform;
        depthCutoff: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const BlurShaderUtils: {
    createSampleWeights(kernelRadius: number, stdDev: number): number[];
    createSampleOffsets(kernelRadius: number, uvIncrement: Vector2): Vector2[];
    configure(configure: Material, kernelRadius: number, stdDev: number, uvIncrement: Vector2): void;
};

}`;export{e as default};