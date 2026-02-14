<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		dialog: string;
		imgSrc: string;
		imgAlt: string;
		children: Snippet;
	}

	let { dialog, imgSrc, imgAlt, children }: Props = $props();
</script>

<div
	class="flex h-full w-full flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-pink-300/75 py-6 shadow-2xl"
>
	<div class=" mb-2 flex w-full flex-col items-center justify-center gap-2">
		<p class="text-center text-3xl font-medium">
			{dialog}
		</p>
		<img src={imgSrc} alt={imgAlt} class="mb-2 w-82 py-5" />
		{@render children()}
	</div>
</div>
