import { SvelteComponent } from "svelte";
import { type IconSize, type PullDirection } from './utils';
declare const __propDef: {
    props: {
        class?: string | undefined;
        id?: string | undefined;
        style?: string | undefined;
        size?: IconSize | undefined;
        pull?: PullDirection | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FaLayersProps = typeof __propDef.props;
export type FaLayersEvents = typeof __propDef.events;
export type FaLayersSlots = typeof __propDef.slots;
export default class FaLayers extends SvelteComponent<FaLayersProps, FaLayersEvents, FaLayersSlots> {
}
export {};
