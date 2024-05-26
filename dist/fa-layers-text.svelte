<script lang="ts">import {
  getStyles,
  getTransform,
  joinCss
} from "./utils";
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
} = $props();
const style = $derived(getStyles(
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
        void 0,
        "em",
        "deg"
      )
    }),
    attributes.style
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
