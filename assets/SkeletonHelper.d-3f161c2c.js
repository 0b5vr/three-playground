const e=`declare module 'three/src/helpers/SkeletonHelper' {
import { Object3D } from 'three/src/core/Object3D';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Bone } from 'three/src/objects/Bone';
import { LineSegments } from 'three/src/objects/LineSegments';

export class SkeletonHelper extends LineSegments {
    constructor(object: Object3D);

    /**
     * @default 'SkeletonHelper'
     */
    type: string;

    bones: Bone[];
    root: Object3D;

    readonly isSkeletonHelper: true;

    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    getBoneList(object: Object3D): Bone[];
    update(): void;

    dispose(): void;
}

}`;export{e as default};
