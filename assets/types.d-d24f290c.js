const r=`declare module 'camera-controls/types' {
import * as _THREE from 'three';\r
export interface THREESubset {\r
    Vector2: typeof _THREE.Vector2;\r
    Vector3: typeof _THREE.Vector3;\r
    Vector4: typeof _THREE.Vector4;\r
    Quaternion: typeof _THREE.Quaternion;\r
    Matrix4: typeof _THREE.Matrix4;\r
    Spherical: typeof _THREE.Spherical;\r
    Box3: typeof _THREE.Box3;\r
    Sphere: typeof _THREE.Sphere;\r
    Raycaster: typeof _THREE.Raycaster;\r
    [key: string]: any;\r
}\r
export type Ref = {\r
    value: number;\r
};\r
export declare const MOUSE_BUTTON: {\r
    readonly LEFT: 1;\r
    readonly RIGHT: 2;\r
    readonly MIDDLE: 4;\r
};\r
export type MOUSE_BUTTON = typeof MOUSE_BUTTON[keyof typeof MOUSE_BUTTON];\r
export declare const ACTION: Readonly<{\r
    readonly NONE: 0;\r
    readonly ROTATE: 1;\r
    readonly TRUCK: 2;\r
    readonly OFFSET: 4;\r
    readonly DOLLY: 8;\r
    readonly ZOOM: 16;\r
    readonly TOUCH_ROTATE: 32;\r
    readonly TOUCH_TRUCK: 64;\r
    readonly TOUCH_OFFSET: 128;\r
    readonly TOUCH_DOLLY: 256;\r
    readonly TOUCH_ZOOM: 512;\r
    readonly TOUCH_DOLLY_TRUCK: 1024;\r
    readonly TOUCH_DOLLY_OFFSET: 2048;\r
    readonly TOUCH_DOLLY_ROTATE: 4096;\r
    readonly TOUCH_ZOOM_TRUCK: 8192;\r
    readonly TOUCH_ZOOM_OFFSET: 16384;\r
    readonly TOUCH_ZOOM_ROTATE: 32768;\r
}>;\r
export type ACTION = number;\r
export interface PointerInput {\r
    pointerId: number;\r
    clientX: number;\r
    clientY: number;\r
    deltaX: number;\r
    deltaY: number;\r
    mouseButton: MOUSE_BUTTON | null;\r
}\r
type mouseButtonAction = typeof ACTION.ROTATE | typeof ACTION.TRUCK | typeof ACTION.OFFSET | typeof ACTION.DOLLY | typeof ACTION.ZOOM | typeof ACTION.NONE;\r
type mouseWheelAction = typeof ACTION.ROTATE | typeof ACTION.TRUCK | typeof ACTION.OFFSET | typeof ACTION.DOLLY | typeof ACTION.ZOOM | typeof ACTION.NONE;\r
type singleTouchAction = typeof ACTION.TOUCH_ROTATE | typeof ACTION.TOUCH_TRUCK | typeof ACTION.TOUCH_OFFSET | typeof ACTION.DOLLY | typeof ACTION.ZOOM | typeof ACTION.NONE;\r
type multiTouchAction = typeof ACTION.TOUCH_DOLLY_ROTATE | typeof ACTION.TOUCH_DOLLY_TRUCK | typeof ACTION.TOUCH_DOLLY_OFFSET | typeof ACTION.TOUCH_ZOOM_ROTATE | typeof ACTION.TOUCH_ZOOM_TRUCK | typeof ACTION.TOUCH_ZOOM_OFFSET | typeof ACTION.TOUCH_DOLLY | typeof ACTION.TOUCH_ZOOM | typeof ACTION.TOUCH_ROTATE | typeof ACTION.TOUCH_TRUCK | typeof ACTION.TOUCH_OFFSET | typeof ACTION.NONE;\r
export interface MouseButtons {\r
    left: mouseButtonAction;\r
    middle: mouseButtonAction;\r
    right: mouseButtonAction;\r
    wheel: mouseWheelAction;\r
}\r
export interface Touches {\r
    one: singleTouchAction;\r
    two: multiTouchAction;\r
    three: multiTouchAction;\r
}\r
export interface FitToOptions {\r
    cover: boolean;\r
    paddingLeft: number;\r
    paddingRight: number;\r
    paddingBottom: number;\r
    paddingTop: number;\r
}\r
export interface CameraControlsEventMap {\r
    update: {\r
        type: 'update';\r
    };\r
    wake: {\r
        type: 'wake';\r
    };\r
    rest: {\r
        type: 'rest';\r
    };\r
    sleep: {\r
        type: 'sleep';\r
    };\r
    transitionstart: {\r
        type: 'transitionstart';\r
    };\r
    controlstart: {\r
        type: 'controlstart';\r
    };\r
    control: {\r
        type: 'control';\r
    };\r
    controlend: {\r
        type: 'controlend';\r
    };\r
}\r
export declare function isPerspectiveCamera(camera: _THREE.Camera): camera is _THREE.PerspectiveCamera;\r
export declare function isOrthographicCamera(camera: _THREE.Camera): camera is _THREE.OrthographicCamera;\r
export {};\r

}`;export{r as default};
