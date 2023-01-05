const e=`declare module 'three/examples/jsm/shaders/VelocityShader' {
import { IUniform, UniformsLib } from 'three/src/Three';

export const VelocityShader: {
    uniforms: typeof UniformsLib['common'] &
        typeof UniformsLib['displacementmap'] & {
            modelMatrixPrev: IUniform;
            currentProjectionViewMatrix: IUniform;
            previousProjectionViewMatrix: IUniform;
        };

    fragmentShader: string;
    vertexShader: string;
};

}`;export{e as default};
