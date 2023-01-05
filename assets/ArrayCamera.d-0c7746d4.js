const e=`declare module 'three/src/cameras/ArrayCamera' {
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';

export class ArrayCamera extends PerspectiveCamera {
    constructor(cameras?: PerspectiveCamera[]);

    /**
     * @default []
     */
    cameras: PerspectiveCamera[];
    readonly isArrayCamera: true;
}

}`;export{e as default};
