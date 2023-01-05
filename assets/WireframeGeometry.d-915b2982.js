const e=`declare module 'three/src/geometries/WireframeGeometry' {
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class WireframeGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> extends BufferGeometry {
    constructor(geometry?: TBufferGeometry);

    /**
     * @default 'WireframeGeometry'
     */
    type: string;

    parameters: {
        geometry: TBufferGeometry;
    };
}

}`;export{e as default};
