const e=`declare module 'three/src/extras/Earcut' {
import { Triangle } from 'three/src/Three';
export namespace Earcut {
    function triangulate(data: number[], holeIndices: number[], dim: number): Triangle[];
}

}`;export{e as default};
