const r=`declare module 'camera-controls/utils/notSupportedInOrthographicCamera' {
import * as _THREE from 'three';\r
export declare function notSupportedInOrthographicCamera(camera: _THREE.OrthographicCamera | _THREE.PerspectiveCamera, message: string): camera is _THREE.OrthographicCamera;\r

}`;export{r as default};
