const e=`declare module 'three/src/helpers/BoxHelper' {
import { ColorRepresentation } from 'three/src/utils';
import { Object3D } from 'three/src/core/Object3D';
import { LineSegments } from 'three/src/objects/LineSegments';

export class BoxHelper extends LineSegments {
    /**
     * @param object
     * @param [color=0xffff00]
     */
    constructor(object: Object3D, color?: ColorRepresentation);

    /**
     * @default 'BoxHelper'
     */
    type: string;

    update(object?: Object3D): void;

    setFromObject(object: Object3D): this;

    dispose(): void;
}

}`;export{e as default};
