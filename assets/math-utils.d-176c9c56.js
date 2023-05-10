const e=`declare module 'camera-controls/utils/math-utils' {
import * as _THREE from 'three';\r
import { Ref } from 'camera-controls/types';\r
export declare const DEG2RAD: number;\r
export declare function clamp(value: number, min: number, max: number): number;\r
export declare function approxZero(number: number, error?: number): boolean;\r
export declare function approxEquals(a: number, b: number, error?: number): boolean;\r
export declare function roundToStep(value: number, step: number): number;\r
export declare function infinityToMaxNumber(value: number): number;\r
export declare function maxNumberToInfinity(value: number): number;\r
export declare function smoothDamp(current: number, target: number, currentVelocityRef: Ref, smoothTime: number, maxSpeed: number | undefined, deltaTime: number): number;\r
export declare function smoothDampVec3(current: _THREE.Vector3, target: _THREE.Vector3, currentVelocityRef: _THREE.Vector3, smoothTime: number, maxSpeed: number | undefined, deltaTime: number, out: _THREE.Vector3): _THREE.Vector3;\r

}`;export{e as default};
