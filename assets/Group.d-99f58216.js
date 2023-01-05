const e=`declare module 'three/src/objects/Group' {
import { Object3D } from 'three/src/core/Object3D';

export class Group extends Object3D {
    constructor();
    type: 'Group';
    readonly isGroup: true;
}

}`;export{e as default};
