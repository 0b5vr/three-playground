const n=`declare module '@pixiv/three-vrm-springbone/VRMSpringBoneJointSettings' {
export interface VRMSpringBoneJointSettings {
    /**
     * Radius of the bone, will be used for collision.
     */
    hitRadius: number;
    stiffness: number;
    gravityPower: number;
    gravityDir: THREE.Vector3;
    dragForce: number;
}

}`;export{n as default};
