const r=`declare module 'three/src/loaders/MaterialLoader' {
import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { Texture } from 'three/src/textures/Texture';
import { Material } from 'three/src/materials/Material';

export class MaterialLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    load(
        url: string,
        onLoad: (material: Material) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Material>;
    setTextures(textures: { [key: string]: Texture }): this;
    parse(json: any): Material;
}

}`;export{r as default};
