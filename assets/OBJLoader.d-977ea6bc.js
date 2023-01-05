const r=`declare module 'three/examples/jsm/loaders/OBJLoader' {
import { Loader, LoadingManager, Group } from 'three/src/Three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export class OBJLoader extends Loader {
    constructor(manager?: LoadingManager);
    materials: MTLLoader.MaterialCreator;

    load(
        url: string,
        onLoad: (group: Group) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Group>;
    parse(data: string): Group;
    setMaterials(materials: MTLLoader.MaterialCreator): this;
}

}`;export{r as default};
