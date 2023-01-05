const e=`declare module 'three/src/renderers/webgl/WebGLObjects' {
export class WebGLObjects {
    constructor(gl: WebGLRenderingContext, geometries: any, attributes: any, info: any);

    update(object: any): any;
    dispose(): void;
}

}`;export{e as default};
