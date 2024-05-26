import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
import { type IconSize, type PullDirection } from './utils';
declare const __propDef: {
    props: HTMLAttributes<HTMLElement> & {
        size?: IconSize | undefined;
        style?: string | undefined;
        pull?: PullDirection | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type FaLayersProps_ = typeof __propDef.props;
export { FaLayersProps_ as FaLayersProps };
export type FaLayersEvents = typeof __propDef.events;
export type FaLayersSlots = typeof __propDef.slots;
export default class FaLayers extends SvelteComponent<FaLayersProps_, FaLayersEvents, FaLayersSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<HTMLAttributes<HTMLElement> & {
        size?: IconSize | undefined;
        style?: string | undefined;
        pull?: PullDirection | undefined;
    }>);
    $$bindings: "";
}
