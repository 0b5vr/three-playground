const n=`declare module '@pixiv/types-vrmc-node-constraint-1.0/Constraint' {
import { AimConstraint } from '@pixiv/types-vrmc-node-constraint-1.0/AimConstraint';
import { RollConstraint } from '@pixiv/types-vrmc-node-constraint-1.0/RollConstraint';
import type { RotationConstraint } from '@pixiv/types-vrmc-node-constraint-1.0/RotationConstraint';
/**
 * An object contains one of constraints.
 */
export interface Constraint {
    roll?: RollConstraint;
    aim?: AimConstraint;
    rotation?: RotationConstraint;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
