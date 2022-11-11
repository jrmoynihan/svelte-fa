import { SvelteComponentTyped } from "svelte";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { type FlipDirection, type IconSize, type PullDirection } from "./utils";
declare const __propDef: {
    props: {
        class?: string | undefined;
        id?: string | undefined;
        style?: string | undefined;
        icon: IconDefinition;
        size: IconSize;
        color?: string | undefined;
        fw?: boolean | undefined;
        pull: PullDirection;
        scale?: number | undefined;
        translateX?: string | number | undefined;
        translateY?: string | number | undefined;
        rotate?: string | number | undefined;
        flip?: FlipDirection | undefined;
        spin?: boolean | undefined;
        pulse?: boolean | undefined;
        primaryColor?: string | undefined;
        secondaryColor?: string | undefined;
        primaryOpacity?: number | undefined;
        secondaryOpacity?: number | undefined;
        swapOpacity?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FaProps = typeof __propDef.props;
export declare type FaEvents = typeof __propDef.events;
export declare type FaSlots = typeof __propDef.slots;
export default class Fa extends SvelteComponentTyped<FaProps, FaEvents, FaSlots> {
}
export {};
