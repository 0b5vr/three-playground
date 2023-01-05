const r=`declare module 'three/src/utils' {
import { Color } from 'three/src/math/Color';

export type ColorRepresentation = Color | string | number;

}`;export{r as default};
