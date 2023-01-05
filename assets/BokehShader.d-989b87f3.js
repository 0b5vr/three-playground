const n=`declare module 'three/examples/jsm/shaders/BokehShader' {
import { IUniform } from 'three/src/Three';

export const BokehShader: {
    defines: {
        DEPTH_PACKING: number;
        PERSPECTIVE_CAMERA: number;
    };
    uniforms: {
        tColor: IUniform;
        tDepth: IUniform;
        focus: IUniform;
        aspect: IUniform;
        aperture: IUniform;
        maxblur: IUniform;
        nearClip: IUniform;
        farClip: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{n as default};
