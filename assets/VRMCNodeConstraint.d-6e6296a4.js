const n=`declare module '@pixiv/types-vrmc-node-constraint-1.0/VRMCNodeConstraint' {
import type { Constraint } from '@pixiv/types-vrmc-node-constraint-1.0/Constraint';
/**
 * glTF extension that defines a node constraint.
 */
export interface VRMCNodeConstraint {
    /**
     * Specification version of VRMC_node_constraint
     */
    specVersion: '1.0' | '1.0-beta';
    constraint: Constraint;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
