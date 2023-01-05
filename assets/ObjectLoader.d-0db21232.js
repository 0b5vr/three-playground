const e=`declare module 'three/src/loaders/ObjectLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { Object3D } from 'three/src/core/Object3D';
import { Texture } from 'three/src/textures/Texture';
import { Material } from 'three/src/materials/Material';
import { AnimationClip } from 'three/src/animation/AnimationClip';
import { InstancedBufferGeometry } from 'three/src/core/InstancedBufferGeometry';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Source } from 'three/src/textures/Source';

export class ObjectLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (object: Object3D) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync<ObjectType extends Object3D>(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): // tslint:disable-next-line:no-unnecessary-generics
    Promise<ObjectType>;
    // tslint:disable-next-line:no-unnecessary-generics
    parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
    // tslint:disable-next-line:no-unnecessary-generics
    parseAsync<T extends Object3D>(json: any): Promise<T>;
    parseGeometries(json: any): { [key: string]: InstancedBufferGeometry | BufferGeometry }; // Array of BufferGeometry or Geometry or Geometry2.
    parseMaterials(json: any, textures: { [key: string]: Texture }): Material[]; // Array of Classes that inherits from Matrial.
    parseAnimations(json: any): AnimationClip[];
    parseImages(json: any, onLoad?: () => void): { [key: string]: Source };
    parseImagesAsync(json: any): Promise<{ [key: string]: Source }>;
    parseTextures(json: any, images: any): Texture[];
    parseObject<T extends Object3D>(
        data: any,
        geometries: any[],
        materials: Material[],
        animations: AnimationClip[],
    ): // tslint:disable-next-line:no-unnecessary-generics
    T;
}

}`;export{e as default};
