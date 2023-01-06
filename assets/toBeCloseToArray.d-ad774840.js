const e=`declare module '@pixiv/three-vrm-springbone/tests/matchers/toBeCloseToArray' {
/// <reference types="jest" />
export declare function toBeCloseToArray(received: number[], expected: number[], precision?: number): jest.CustomMatcherResult;
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeCloseToArray(expected: number[], precision?: number): R;
        }
    }
}

}`;export{e as default};
