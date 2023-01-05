const r=`declare module 'three/src/animation/tracks/ColorKeyframeTrack' {
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack';
import { InterpolationModes } from 'three/src/constants';

export class ColorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'color'
     */
    ValueTypeName: string;
}

}`;export{r as default};
