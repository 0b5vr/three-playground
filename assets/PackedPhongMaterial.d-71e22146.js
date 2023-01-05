const e=`declare module 'three/examples/jsm/utils/PackedPhongMaterial' {
/**
 * \`PackedPhongMaterial\` inherited from THREE.MeshPhongMaterial
 *
 * @param {Object} parameters
 */
import { MeshPhongMaterial, MeshPhongMaterialParameters } from 'three/src/Three';

export class PackedPhongMaterial extends MeshPhongMaterial {
    constructor(parameters: MeshPhongMaterialParameters);
}

}`;export{e as default};
