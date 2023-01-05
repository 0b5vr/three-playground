const e=`declare module 'three/examples/jsm/materials/MeshGouraudMaterial' {
/**
 * MeshGouraudMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 *
 */

import { ShaderMaterial, ShaderMaterialParameters } from 'three/src/Three';

export class MeshGouraudMaterial extends ShaderMaterial {
    isMeshGouraudMaterial: true;
    type: 'MeshGouraudMaterial';

    constructor(parameters?: ShaderMaterialParameters);

    copy(source: MeshGouraudMaterial): this;
}

}`;export{e as default};
