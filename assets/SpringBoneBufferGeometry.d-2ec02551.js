const e=`declare module '@pixiv/three-vrm-springbone/helpers/utils/SpringBoneBufferGeometry' {
import * as THREE from 'three';
import { VRMSpringBoneJoint } from '@pixiv/three-vrm-springbone/VRMSpringBoneJoint';
export declare class SpringBoneBufferGeometry extends THREE.BufferGeometry {
    private readonly _attrPos;
    private readonly _attrIndex;
    private readonly _springBone;
    private _currentRadius;
    private readonly _currentTail;
    constructor(springBone: VRMSpringBoneJoint);
    update(): void;
    private _buildPosition;
    private _buildIndex;
}

}`;export{e as default};
