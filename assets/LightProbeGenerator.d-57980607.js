const e=`declare module 'three/examples/jsm/lights/LightProbeGenerator' {
import { CubeTexture, LightProbe, WebGLRenderer, WebGLCubeRenderTarget } from 'three/src/Three';

export namespace LightProbeGenerator {
    function fromCubeTexture(cubeTexture: CubeTexture): LightProbe;
    function fromCubeRenderTarget(renderer: WebGLRenderer, cubeRenderTarget: WebGLCubeRenderTarget): LightProbe;
}

}`;export{e as default};
