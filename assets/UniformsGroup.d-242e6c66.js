const n=`declare module 'three/src/core/UniformsGroup' {
import { EventDispatcher } from 'three/src/core/EventDispatcher';
import { Uniform } from 'three/src/core/Uniform';

import { Usage } from 'three/src/constants';

export class UniformsGroup extends EventDispatcher {
    isUniformsGroup: true;
    id: number;
    usage: Usage;
    uniforms: Uniform[];

    constructor();

    add(uniform: Uniform): this;

    remove(uniform: Uniform): this;

    setName(name: string): this;

    setUsage(value: Usage): this;

    dispose(): this;

    copy(source: UniformsGroup): this;

    clone(): UniformsGroup;
}

}`;export{n as default};
