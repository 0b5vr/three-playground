const e=`declare module 'three/src/objects/Skeleton' {
import { Bone } from 'three/src/objects/Bone';
import { Matrix4 } from 'three/src/math/Matrix4';
import { DataTexture } from 'three/src/textures/DataTexture';

export class Skeleton {
    constructor(bones: Bone[], boneInverses?: Matrix4[]);

    uuid: string;
    bones: Bone[];
    boneInverses: Matrix4[];
    boneMatrices: Float32Array;
    boneTexture: null | DataTexture;
    boneTextureSize: number;
    frame: number;

    init(): void;
    calculateInverses(): void;
    computeBoneTexture(): this;
    pose(): void;
    update(): void;
    clone(): Skeleton;
    getBoneByName(name: string): undefined | Bone;
    dispose(): void;

    /**
     * @deprecated This property has been removed completely.
     */
    useVertexTexture: boolean;
}

}`;export{e as default};
