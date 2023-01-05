const e=`declare module 'three/examples/jsm/helpers/OctreeHelper' {
import { ColorRepresentation, LineSegments } from 'three/src/Three';
import { Octree } from 'three/examples/jsm/math/Octree';

export class OctreeHelper extends LineSegments {
    constructor(octree: Octree, color: ColorRepresentation);

    octree: Octree;
    color: ColorRepresentation;

    /**
     * @default 'OctreeHelper'
     */
    type: 'OctreeHelper' | string;

    update(): void;
    dispose(): void;
}

}`;export{e as default};
