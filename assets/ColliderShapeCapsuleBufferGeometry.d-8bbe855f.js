const e=`declare module '@pixiv/three-vrm-springbone/helpers/utils/ColliderShapeCapsuleBufferGeometry' {
import * as THREE from 'three';
import { VRMSpringBoneColliderShapeCapsule } from '@pixiv/three-vrm-springbone/VRMSpringBoneColliderShapeCapsule';
import { ColliderShapeBufferGeometry } from '@pixiv/three-vrm-springbone/helpers/utils/ColliderShapeBufferGeometry';
export declare class ColliderShapeCapsuleBufferGeometry extends THREE.BufferGeometry implements ColliderShapeBufferGeometry {
    worldScale: number;
    private readonly _attrPos;
    private readonly _attrIndex;
    private readonly _shape;
    private _currentRadius;
    private readonly _currentOffset;
    private readonly _currentTail;
    constructor(shape: VRMSpringBoneColliderShapeCapsule);
    update(): void;
    private _buildPosition;
    private _buildIndex;
}

}`;export{e as default};
