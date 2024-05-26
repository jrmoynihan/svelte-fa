import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { type FlipDirection, type IconSize } from "./utils";
declare const __propDef: {
    props: HTMLAttributes<HTMLElement> & {
        size?: IconSize | undefined;
        color?: string | undefined;
        scale?: string | number | undefined;
        translateX?: string | number | undefined;
        translateY?: string | number | undefined;
        rotate?: string | number | undefined;
        flip?: FlipDirection | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type FaLayersTextProps_ = typeof __propDef.props;
export { FaLayersTextProps_ as FaLayersTextProps };
export type FaLayersTextEvents = typeof __propDef.events;
export type FaLayersTextSlots = typeof __propDef.slots;
export default class FaLayersText extends SvelteComponent<FaLayersTextProps_, FaLayersTextEvents, FaLayersTextSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<HTMLAttributes<HTMLElement> & {
        size?: IconSize | undefined;
        color?: string | undefined;
        scale?: string | number | undefined;
        translateX?: string | number | undefined;
        translateY?: string | number | undefined;
        rotate?: string | number | undefined;
        flip?: FlipDirection | undefined;
    }>);
    $$bindings: "";
}
