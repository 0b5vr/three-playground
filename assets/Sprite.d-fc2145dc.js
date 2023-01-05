const e=`declare module 'three/src/objects/Sprite' {
import { Vector2 } from 'three/src/math/Vector2';
import { Raycaster } from 'three/src/core/Raycaster';
import { Object3D } from 'three/src/core/Object3D';
import { Intersection } from 'three/src/core/Raycaster';
import { SpriteMaterial } from 'three/src/materials/Materials';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class Sprite extends Object3D {
    constructor(material?: SpriteMaterial);

    type: 'Sprite';
    readonly isSprite: true;

    geometry: BufferGeometry;
    material: SpriteMaterial;
    center: Vector2;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    copy(source: this): this;
}

}`;export{e as default};
