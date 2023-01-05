const e=`declare module 'three/src/renderers/WebGLMultisampleRenderTarget' {
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget';

/**
 * @deprecated THREE.WebGLMultisampleRenderTarget has been removed. Use a normal {@link WebGLRenderTarget render target} and set the "samples" property to greater 0 to enable multisampling.
 */
export class WebGLMultisampleRenderTarget extends WebGLRenderTarget {}

}`;export{e as default};
