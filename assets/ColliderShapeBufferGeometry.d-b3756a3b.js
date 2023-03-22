const e=`declare module '@pixiv/three-vrm-springbone/helpers/utils/ColliderShapeBufferGeometry' {
import * as THREE from 'three';
export interface ColliderShapeBufferGeometry extends THREE.BufferGeometry {
    worldScale: number;
    update: () => void;
}

}`;export{e as default};
