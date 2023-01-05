const e=`declare module 'three/src/core/InstancedBufferGeometry' {
import { BufferGeometry } from 'three/src/core/BufferGeometry';

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js|src/core/InstancedBufferGeometry.js}
 */
export class InstancedBufferGeometry extends BufferGeometry {
    constructor();

    /**
     * @default 'InstancedBufferGeometry
     */
    type: string;

    isInstancedBufferGeometry: boolean;

    /**
     * @default Infinity
     */
    instanceCount: number;
}

}`;export{e as default};
