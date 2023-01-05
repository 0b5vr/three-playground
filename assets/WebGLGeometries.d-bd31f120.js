const e=`declare module 'three/src/renderers/webgl/WebGLGeometries' {
import { WebGLAttributes } from 'three/src/renderers/webgl/WebGLAttributes';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo';
import { BufferAttribute } from 'three/src/core/BufferAttribute';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Object3D } from 'three/src/core/Object3D';

export class WebGLGeometries {
    constructor(gl: WebGLRenderingContext, attributes: WebGLAttributes, info: WebGLInfo);

    get(object: Object3D, geometry: BufferGeometry): BufferGeometry;
    update(geometry: BufferGeometry): void;
    getWireframeAttribute(geometry: BufferGeometry): BufferAttribute;
}

}`;export{e as default};
