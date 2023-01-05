const n=`declare module 'three/src/loaders/Cache' {
export namespace Cache {
    /**
     * @default false
     */
    let enabled: boolean;

    /**
     * @default {}
     */
    let files: any;

    function add(key: string, file: any): void;
    function get(key: string): any;
    function remove(key: string): void;
    function clear(): void;
}

}`;export{n as default};
