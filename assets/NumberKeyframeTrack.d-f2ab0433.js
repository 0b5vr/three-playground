const e=`declare module 'three/src/animation/tracks/NumberKeyframeTrack' {
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack';
import { InterpolationModes } from 'three/src/constants';

export class NumberKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'number'
     */
    ValueTypeName: string;
}

}`;export{e as default};