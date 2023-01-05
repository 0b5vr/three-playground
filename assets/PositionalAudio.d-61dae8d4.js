const e=`declare module 'three/src/audio/PositionalAudio' {
import { AudioListener } from 'three/src/audio/AudioListener';
import { Audio } from 'three/src/audio/Audio';

export class PositionalAudio extends Audio<PannerNode> {
    constructor(listener: AudioListener);

    panner: PannerNode;

    getOutput(): PannerNode;
    setRefDistance(value: number): this;
    getRefDistance(): number;
    setRolloffFactor(value: number): this;
    getRolloffFactor(): number;
    setDistanceModel(value: string): this;
    getDistanceModel(): string;
    setMaxDistance(value: number): this;
    getMaxDistance(): number;
    setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): this;
    updateMatrixWorld(force?: boolean): void;
}

}`;export{e as default};
