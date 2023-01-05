const e=`declare module 'three/src/renderers/webgl/WebGLProperties' {
export class WebGLProperties {
    constructor();

    get(object: any): any;
    remove(object: any): void;
    update(object: any, key: any, value: any): any;
    dispose(): void;
}

}`;export{e as default};
