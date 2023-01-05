const n=`declare module 'three/examples/jsm/shaders/GodRaysShader' {
import { IUniform } from 'three/src/Three';

export const GodRaysDepthMaskShader: {
    uniforms: {
        tInput: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const GodRaysGenerateShader: {
    uniforms: {
        tInput: IUniform;
        fStepSize: IUniform;
        vSunPositionScreenSpace: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const GodRaysCombineShader: {
    uniforms: {
        tColors: IUniform;
        tGodRays: IUniform;
        fGodRayIntensity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const GodRaysFakeSunShader: {
    uniforms: {
        vSunPositionScreenSpace: IUniform;
        fAspect: IUniform;
        sunColor: IUniform;
        bgColor: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

}`;export{n as default};
