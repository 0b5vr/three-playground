const e=`declare module 'three/examples/jsm/capabilities/WebGL' {
declare namespace WEBGL {
    function isWebGLAvailable(): boolean;
    function isWebGL2Available(): boolean;
    function getWebGLErrorMessage(): HTMLElement;
    function getWebGL2ErrorMessage(): HTMLElement;
    function getErrorMessage(version: number): HTMLElement;
}

export default WEBGL;

}`;export{e as default};
