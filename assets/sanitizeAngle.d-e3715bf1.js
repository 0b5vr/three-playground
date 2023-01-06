const n=`declare module '@pixiv/three-vrm-core/lookAt/utils/sanitizeAngle' {
/**
 * Make sure the angle is within -PI to PI.
 *
 * @example
 * \`\`\`js
 * sanitizeAngle(1.5 * Math.PI) // -0.5 * PI
 * \`\`\`
 *
 * @param angle An input angle
 */
export declare function sanitizeAngle(angle: number): number;

}`;export{n as default};
