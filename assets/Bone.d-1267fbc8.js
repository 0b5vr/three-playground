const e=`declare module 'three/src/objects/Bone' {
import { Object3D } from 'three/src/core/Object3D';

// Objects //////////////////////////////////////////////////////////////////////////////////

export class Bone extends Object3D {
    constructor();
    readonly isBone: true;
    type: 'Bone';
}

}`;export{e as default};
