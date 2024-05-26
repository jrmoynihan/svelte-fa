<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import {
		getStyles,
		getTransform,
		joinCss,
		type FlipDirection,
		type IconSize,
	} from "./utils";

 interface FaLayersTextProps extends HTMLAttributes<HTMLElement> {
  size?: IconSize;
  color?: string;
  scale?: number | string;
  translateX?: number | string;
  translateY?: number | string;
  rotate?: number | string;
  flip?: FlipDirection;
 }

  let {
    size = "",
    color,
    scale = 1,
    translateX = 0,
    translateY = 0,
    rotate = "",
    flip = false,
    children,
    ...attributes
  } : FaLayersTextProps = $props()

  const style: string = $derived(getStyles(
    joinCss([
      joinCss({
        color,
        display: "inline-block",
        height: "auto",
        transform: getTransform(
          scale,
          translateX,
          translateY,
          rotate,
          flip,
          undefined,
          "em",
          "deg"
        ),
      }),
      attributes.style,
    ]),
    size
  ));
</script>

<span 
  {...attributes}
  class="svelte-fa-layers-text {attributes.class}" 
>
  <span {style}>
    {@render children?.()}
  </span>
</span>
