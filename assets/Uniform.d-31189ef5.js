const e=`declare module 'three/src/core/Uniform' {
export class Uniform<T = any> {
    constructor(value: T);
    /**
     * @deprecated
     */
    constructor(type: string, value: T);
    /**
     * @deprecated
     */
    type: string;
    value: T;
    /**
     * @deprecated Use {@link Object3D#onBeforeRender object.onBeforeRender()} instead.
     */
    dynamic: boolean;

    /**
     * @deprecated Use {@link Object3D#onBeforeRender object.onBeforeRender()} instead.
     */
    onUpdate(callback: () => void): Uniform<T>;
}

}`;export{e as default};
