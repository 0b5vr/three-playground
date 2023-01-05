const e=`declare module 'three/examples/jsm/webxr/XREstimatedLight' {
import { DirectionalLight, Group, LightProbe, Texture, WebGLRenderer } from 'three/src/Three';

export class SessionLightProbe {
    xrLight: XREstimatedLight;
    renderer: WebGLRenderer;
    lightProbe: LightProbe;
    xrWebGLBinding: XRWebGLBinding | null;
    estimationStartCallback: () => void;
    frameCallback: (this: SessionLightProbe, time: number, xrFrame: XRFrame) => void;

    constructor(
        xrLight: XREstimatedLight,
        renderer: WebGLRenderer,
        lightProbe: LightProbe,
        environmentEstimation: boolean,
        estimationStartCallback: () => void,
    );

    updateReflection: () => void;

    onXRFrame: XRFrameRequestCallback;

    dispose: () => void;
}

export class XREstimatedLight extends Group {
    lightProbe: LightProbe;
    directionalLight: DirectionalLight;
    environment: Texture;

    constructor(renderer: WebGLRenderer, environmentEstimation?: boolean);
}

}`;export{e as default};
