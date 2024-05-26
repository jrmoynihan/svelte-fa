<script lang="ts">
	import Fa from '$lib/fa.svelte';
	import { icon_sizes, type IconSize } from '$lib/utils';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import * as fa_icons from '@fortawesome/free-solid-svg-icons';

	const icons = Object.entries(fa_icons).filter(
		([key, icon]) => key !== 'fas' && key !== 'prefix'
	);
	let selected_icon: IconDefinition;
	let selected_size: IconSize = '10x';
</script>

<h1>Svelte Font Awesome</h1>

<select bind:value={selected_icon}>
	{#each icons as [key, icon]}
		<option value={icon}>{key}</option>
	{/each}
</select>
<select bind:value={selected_size}>
	{#each icon_sizes as size}
		<option value={size}>{size}</option>
	{/each}
</select>
<div class="container">
	<Fa icon={selected_icon} size={selected_size} />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		padding: 2rem;
	}
</style>
