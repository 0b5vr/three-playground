const e=`declare module 'camera-controls/EventDispatcher' {
export declare type Listener = (event?: DispatcherEvent) => void;\r
export interface DispatcherEvent {\r
    type: string;\r
    [key: string]: any;\r
}\r
export declare class EventDispatcher {\r
    private _listeners;\r
    /**\r
     * Adds the specified event listener.\r
     * @param type event name\r
     * @param listener handler function\r
     * @category Methods\r
     */\r
    addEventListener(type: string, listener: Listener): void;\r
    /**\r
     * Removes the specified event listener\r
     * @param type event name\r
     * @param listener handler function\r
     * @category Methods\r
     */\r
    removeEventListener(type: string, listener: Listener): void;\r
    /**\r
     * Removes all event listeners\r
     * @param type event name\r
     * @category Methods\r
     */\r
    removeAllEventListeners(type?: string): void;\r
    /**\r
     * Fire an event type.\r
     * @param event DispatcherEvent\r
     * @category Methods\r
     */\r
    dispatchEvent(event: DispatcherEvent): void;\r
}\r

}`;export{e as default};
