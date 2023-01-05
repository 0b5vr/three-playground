const e=`declare module 'three/src/animation/tracks/VectorKeyframeTrack' {
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack';
import { InterpolationModes } from 'three/src/constants';

export class VectorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'vector'
     */
    ValueTypeName: string;
}

}`;export{e as default};
