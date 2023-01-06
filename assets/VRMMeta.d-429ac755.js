const e=`declare module '@pixiv/three-vrm-core/meta/VRMMeta' {
import type { VRM0Meta } from '@pixiv/three-vrm-core/meta/VRM0Meta';
import type { VRM1Meta } from '@pixiv/three-vrm-core/meta/VRM1Meta';
/**
 * VRMMeta can be either {@link VRM0Meta} or {@link VRM1Meta}.
 */
export declare type VRMMeta = VRM0Meta | VRM1Meta;

}`;export{e as default};
