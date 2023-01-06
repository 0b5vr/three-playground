const n=`declare module '@pixiv/types-vrmc-node-constraint-1.0/AimConstraint' {
/**
 * A constraint that makes it look at a source object.
 */
export interface AimConstraint {
    /**
     * The index of the node constrains the node.
     */
    source: number;
    /**
     * The aim axis of the constraint.
     */
    aimAxis: 'PositiveX' | 'NegativeX' | 'PositiveY' | 'NegativeY' | 'PositiveZ' | 'NegativeZ';
    /**
     * The weight of the constraint.
     */
    weight?: number;
    extensions?: {
        [name: string]: any;
    };
    extras?: any;
}

}`;export{n as default};
