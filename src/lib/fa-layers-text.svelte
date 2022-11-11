<script lang="ts">
  import {
    joinCss,
    getStyles,
    getTransform,
    type IconSize,
    type FlipDirection,
  } from "./utils";

  let clazz = "";
  export { clazz as class };
  export let id = "";
  export let style = "";

  export let size: IconSize = "";
  export let color: string = "";

  export let scale: number | string = 1;
  export let translateX: number | string = 0;
  export let translateY: number | string = 0;
  export let rotate: number | string = "";
  export let flip: FlipDirection = false;

  let s: string;

  $: s = getStyles(
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
      style,
    ]),
    size
  );
</script>

<span {id} class="svelte-fa-layers-text {clazz}">
  <span style={s}>
    <slot />
  </span>
</span>
