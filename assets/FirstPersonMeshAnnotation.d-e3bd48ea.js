const n=`declare module '@pixiv/types-vrmc-vrm-1.0/FirstPersonMeshAnnotation' {
/**
 * Specify how the mesh should be interpreted by the camera
 */
export interface FirstPersonMeshAnnotation {
    /**
     * The index of the node that attached to target mesh.
     */
    node: number;
    /**
     * How the camera interprets the mesh.
     */
    type: 'auto' | 'both' | 'thirdPersonOnly' | 'firstPersonOnly';
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
