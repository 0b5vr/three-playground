const e=`declare module 'three/src/textures/DataTexture2DArray' {
import { DataArrayTexture } from 'three/src/textures/DataArrayTexture';

/**
 * @deprecated THREE.DataTexture2DArray has been renamed to DataArrayTexture.
 */
export class DataTexture2DArray extends DataArrayTexture {}

}`;export{e as default};
