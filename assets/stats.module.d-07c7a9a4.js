const n=`declare module 'three/examples/jsm/libs/stats.module' {
interface Stats {
    REVISION: number;
    dom: HTMLDivElement;
    addPanel(panel: Stats.Panel): Stats.Panel;
    showPanel(id: number): void;
    begin(): void;
    end(): number;
    update(): void;
    domElement: HTMLDivElement;
    setMode(id: number): void;
}

declare function Stats(): Stats;

declare namespace Stats {
    interface Panel {
        dom: HTMLCanvasElement;
        update(value: number, maxValue: number): void;
    }

    function Panel(name?: string, fg?: string, bg?: string): Panel;
}

export default Stats;

}`;export{n as default};
