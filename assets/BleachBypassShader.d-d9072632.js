const e=`declare module 'three/examples/jsm/shaders/BleachBypassShader' {
import { IUniform } from 'three/src/Three';

export const BleachBypassShader: {
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
