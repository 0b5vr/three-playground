const e=`declare module 'three/src/textures/DataTexture3D' {
import { Data3DTexture } from 'three/src/textures/Data3DTexture';

/**
 * @deprecated THREE.DataTexture3D has been renamed to Data3DTexture.
 */
export class DataTexture3D extends Data3DTexture {}

}`;export{e as default};
