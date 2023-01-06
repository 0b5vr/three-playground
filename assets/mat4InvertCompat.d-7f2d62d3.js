const t=`declare module '@pixiv/three-vrm-springbone/utils/mat4InvertCompat' {
import * as THREE from 'three';
/**
 * A compat function for \`Matrix4.invert()\` / \`Matrix4.getInverse()\`.
 * \`Matrix4.invert()\` is introduced in r123 and \`Matrix4.getInverse()\` emits a warning.
 * We are going to use this compat for a while.
 * @param target A target matrix
 */
export declare function mat4InvertCompat<T extends THREE.Matrix4>(target: T): T;

}`;export{t as default};
