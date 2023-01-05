const e=`declare module 'three/examples/jsm/shaders/VolumeShader' {
import { IUniform } from 'three/src/Three';

export const VolumeRenderShader1: {
    uniforms: {
        u_size: IUniform;
        u_renderstyle: IUniform;
        u_renderthreshold: IUniform;
        u_clim: IUniform;
        u_data: IUniform;
        u_cmdata: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{e as default};
