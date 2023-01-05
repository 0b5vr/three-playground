const n=`declare module 'three/src/math/interpolants/CubicInterpolant' {
import { Interpolant } from 'three/src/math/Interpolant';

export class CubicInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

}`;export{n as default};
