const e=`declare module 'three/src/animation/tracks/BooleanKeyframeTrack' {
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack';

export class BooleanKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>);

    /**
     * @default 'bool'
     */
    ValueTypeName: string;
}

}`;export{e as default};
