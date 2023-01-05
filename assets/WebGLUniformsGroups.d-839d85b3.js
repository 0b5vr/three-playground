const r=`declare module 'three/src/renderers/webgl/WebGLUniformsGroups' {
import { UniformsGroup } from 'three/src/core/UniformsGroup';

import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo';
import { WebGLProgram } from 'three/src/renderers/webgl/WebGLProgram';
import { WebGLState } from 'three/src/renderers/webgl/WebGLState';

export function WebGLUniformsGroups(
    gl: WebGLRenderingContext,
    info: WebGLInfo,
    capabilities: WebGLCapabilities,
    state: WebGLState,
): {
    dispose: () => void;
    update: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
    bind: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
};

}`;export{r as default};
