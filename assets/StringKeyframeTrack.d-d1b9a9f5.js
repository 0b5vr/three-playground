const r=`declare module 'three/src/animation/tracks/StringKeyframeTrack' {
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack';
import { InterpolationModes } from 'three/src/constants';

export class StringKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    /**
     * @default 'string'
     */
    ValueTypeName: string;
}

}`;export{r as default};
