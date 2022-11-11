import { SvelteComponentTyped } from "svelte";
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
export declare type FaLayersTextProps = typeof __propDef.props;
export declare type FaLayersTextEvents = typeof __propDef.events;
export declare type FaLayersTextSlots = typeof __propDef.slots;
export default class FaLayersText extends SvelteComponentTyped<FaLayersTextProps, FaLayersTextEvents, FaLayersTextSlots> {
}
export {};
