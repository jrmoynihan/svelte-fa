import { SvelteComponentTyped } from "svelte";
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
export declare type FaLayersProps = typeof __propDef.props;
export declare type FaLayersEvents = typeof __propDef.events;
export declare type FaLayersSlots = typeof __propDef.slots;
export default class FaLayers extends SvelteComponentTyped<FaLayersProps, FaLayersEvents, FaLayersSlots> {
}
export {};
