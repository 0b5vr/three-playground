const t=`declare module 'three/src/audio/AudioContext' {
/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioContext.js|src/audio/AudioContext.js}
 */
export namespace AudioContext {
    function getContext(): AudioContext;

    function setContext(context: AudioContext): void;
}

}`;export{t as default};
