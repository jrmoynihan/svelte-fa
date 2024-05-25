import { SvelteComponent } from "svelte";
import { type IconSize, type FlipDirection } from "./utils";
declare const __propDef: {
    props: {
        class?: string | undefined;
        id?: string | undefined;
        style?: string | undefined;
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
    slots: {
        default: {};
    };
};
export type FaLayersTextProps = typeof __propDef.props;
export type FaLayersTextEvents = typeof __propDef.events;
export type FaLayersTextSlots = typeof __propDef.slots;
export default class FaLayersText extends SvelteComponent<FaLayersTextProps, FaLayersTextEvents, FaLayersTextSlots> {
}
export {};
