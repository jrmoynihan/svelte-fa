<script lang="ts">
	import type {
		IconDefinition,
		IconPathData,
	} from '@fortawesome/fontawesome-common-types';
	import {
		getStyles,
		getTransform,
		type FlipDirection,
		type IconSize,
		type PullDirection,
	} from './utils';

	interface FaProps {
		class?: string;
		id?: string;
		style?: string;
		icon: IconDefinition;
		size?: IconSize;
		color?: string;
		fw?: boolean;
		pull?: PullDirection;
		scale?: number;
		translateX?: number | string;
		translateY?: number | string;
		rotate?: number | string;
		flip?: FlipDirection;
		spin?: boolean;
		pulse?: boolean;
		primaryColor?: string;
		secondaryColor?: string;
		primaryOpacity?: number;
		secondaryOpacity?: number;
		swapOpacity?: boolean;
	}

	let {
		icon,
		size = '',
		color,
		fw,
		pull,
		scale = 1,
		translateX = 0,
		translateY = 0,
		rotate = 0,
		flip = false,
		spin,
		pulse,
		primaryColor,
		secondaryColor,
		primaryOpacity = 1,
		secondaryOpacity = 0.4,
		swapOpacity,
		...attributes
	}: FaProps = $props();
	

	const icon_data: [number, number, string[], string, IconPathData] = $derived((icon && icon.icon) || [0, 0, '', [], ''])
	const style: string = $derived(getStyles(attributes.style ?? '', size, pull, fw))
	const transform: string | null | undefined = $derived(getTransform(scale, translateX, translateY, rotate, flip, 512))

</script>

{#snippet duotone_path(path_data_item: number, fill, fill_opacity, swap_opacity)}
	<path
		d={icon_data[4][path_data_item]}
		fill={fill || color || 'currentColor'}
		fill-opacity={swapOpacity != false
			? fill_opacity
			: swap_opacity}
		transform="translate({icon_data[0] / -2} {icon_data[1] / -2})"
	/>
{/snippet}


{#if icon_data[4]}
	<svg
		{...attributes}
		class="svelte-fa {attributes.class}"
		class:pulse
		class:spin
		{style}
		viewBox="0 0 {icon_data[0]} {icon_data[1]}"
		aria-hidden="true"
		role="img"
		xmlns="http://www.w3.org/2000/svg">
		<g
			transform="translate({icon_data[0] / 2} {icon_data[1] / 2})"
			transform-origin="{icon_data[0] / 4} 0">
			<g {transform}>
				{#if typeof icon_data[4] == 'string'}
					<path
						d={icon_data[4]}
						fill={color || primaryColor || 'currentColor'}
						transform="translate({icon_data[0] / -2} {icon_data[1] / -2})" />
				{:else}
					<!-- Duotone icons -->
					{@render duotone_path(0, secondaryColor, primaryOpacity, secondaryOpacity)}
					{@render duotone_path(1, primaryColor, secondaryOpacity, primaryOpacity)}
				{/if}
			</g>
		</g>
	</svg>
{/if}

<style>
	.spin {
		animation: spin 2s 0s infinite linear;
	}

	.pulse {
		animation: spin 1s infinite steps(8);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
