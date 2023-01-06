const e=`declare module '@pixiv/three-vrm-springbone/helpers/utils/ColliderShapeSphereBufferGeometry' {
import * as THREE from 'three';
import { VRMSpringBoneColliderShapeSphere } from '@pixiv/three-vrm-springbone/VRMSpringBoneColliderShapeSphere';
import { ColliderShapeBufferGeometry } from '@pixiv/three-vrm-springbone/helpers/utils/ColliderShapeBufferGeometry';
export declare class ColliderShapeSphereBufferGeometry extends THREE.BufferGeometry implements ColliderShapeBufferGeometry {
    private readonly _attrPos;
    private readonly _attrIndex;
    private readonly _shape;
    private _currentRadius;
    private readonly _currentOffset;
    constructor(shape: VRMSpringBoneColliderShapeSphere);
    update(): void;
    private _buildPosition;
    private _buildIndex;
}

}`;export{e as default};
