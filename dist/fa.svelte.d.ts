import { SvelteComponent } from "svelte";
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { type FlipDirection, type IconSize, type PullDirection } from './utils';
declare const __propDef: {
    props: {
        icon: IconDefinition;
        class?: string | undefined;
        id?: string | undefined;
        style?: string | undefined;
        size?: IconSize | undefined;
        color?: string | undefined;
        fw?: boolean | undefined;
        pull?: PullDirection | undefined;
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
type FaProps_ = typeof __propDef.props;
export { FaProps_ as FaProps };
export type FaEvents = typeof __propDef.events;
export type FaSlots = typeof __propDef.slots;
export default class Fa extends SvelteComponent<FaProps_, FaEvents, FaSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        icon: IconDefinition;
        class?: string | undefined;
        id?: string | undefined;
        style?: string | undefined;
        size?: IconSize | undefined;
        color?: string | undefined;
        fw?: boolean | undefined;
        pull?: PullDirection | undefined;
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
    }>);
    $$bindings: "";
}
