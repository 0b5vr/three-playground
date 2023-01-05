const o=`declare module 'three/src/math/ColorManagement' {
import { ColorSpace, LinearSRGBColorSpace, SRGBColorSpace } from 'three/src/constants';
import { Color } from 'three/src/math/Color';

export function SRGBToLinear(c: number): number;

export function LinearToSRGB(c: number): number;

export namespace ColorManagement {
    /**
     * @default true
     */
    let legacyMode: boolean;

    /**
     * @default LinearSRGBColorSpace
     */
    let workingColorSpace: ColorSpace;

    function convert(
        color: Color,
        sourceColorSpace: SRGBColorSpace | LinearSRGBColorSpace,
        targetColorSpace: SRGBColorSpace | LinearSRGBColorSpace,
    ): Color;

    function fromWorkingColorSpace(color: Color, targetColorSpace: SRGBColorSpace | LinearSRGBColorSpace): Color;

    function toWorkingColorSpace(color: Color, sourceColorSpace: SRGBColorSpace | LinearSRGBColorSpace): Color;
}

}`;export{o as default};
