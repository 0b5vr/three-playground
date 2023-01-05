const n=`declare module 'camera-controls/utils/quatInvertCompat' {
import * as THREE from 'three';\r
/**\r
 * A compat function for \`Quaternion.invert()\` / \`Quaternion.inverse()\`.\r
 * \`Quaternion.invert()\` is introduced in r123 and \`Quaternion.inverse()\` emits a warning.\r
 * We are going to use this compat for a while.\r
 * @param target A target quaternion\r
 */\r
export declare function quatInvertCompat<T extends THREE.Quaternion>(target: T): T;\r

}`;export{n as default};
