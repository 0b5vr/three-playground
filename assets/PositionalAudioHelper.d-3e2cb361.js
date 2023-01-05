const n=`declare module 'three/examples/jsm/helpers/PositionalAudioHelper' {
import { Line, PositionalAudio } from 'three/src/Three';

export class PositionalAudioHelper extends Line {
    constructor(audio: PositionalAudio, range?: number, divisionsInnerAngle?: number, divisionsOuterAngle?: number);

    audio: PositionalAudio;
    range: number;
    divisionsInnerAngle: number;
    divisionsOuterAngle: number;

    dispose(): void;
    update(): void;
}

}`;export{n as default};
