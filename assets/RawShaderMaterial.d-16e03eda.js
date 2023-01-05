const a=`declare module 'three/src/materials/RawShaderMaterial' {
import { ShaderMaterialParameters, ShaderMaterial } from 'three/src/materials/ShaderMaterial';

export class RawShaderMaterial extends ShaderMaterial {
    constructor(parameters?: ShaderMaterialParameters);
}

}`;export{a as default};
