const e=`declare module 'three/examples/jsm/nodes/utils/TimerNode' {
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode';

export type TimerNodeScope =
    | typeof TimerNode.LOCAL
    | typeof TimerNode.GLOBAL
    | typeof TimerNode.DELTA
    | typeof TimerNode.FRAME;

export default class TimerNode extends UniformNode {
    static LOCAL: 'local';
    static GLOBAL: 'global';
    static DELTA: 'delta';
    static FRAME: 'frame';

    scope: TimerNodeScope;
    scale: number;

    constructor(scope?: TimerNodeScope, scale?: number, value?: number);
}

}`;export{e as default};
