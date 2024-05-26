<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import {
		getStyles, type IconSize, type PullDirection,
	} from './utils';

interface FaLayersProps extends HTMLAttributes<HTMLElement> {
  size?: IconSize;
  style?: string;
  pull?: PullDirection;
}

let {
  size = "",
  pull,
  children,
  ...attributes
} : FaLayersProps = $props();

const style : string = $derived(getStyles(attributes?.style ?? "", size, pull, true));
</script>

<span
{style}
{...attributes}
class="svelte-fa-layers {attributes.class}"
>
  {@render children?.()}
</span>

<style>
  .svelte-fa-layers {
    display: inline-block;
    position: relative;
  }
  
  .svelte-fa-layers :global(.svelte-fa) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    text-align: center;
  }
  
  .svelte-fa-layers :global(.svelte-fa-layers-text) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .svelte-fa-layers :global(.svelte-fa-layers-text span) {
    display: inline-block;
  }
  </style>