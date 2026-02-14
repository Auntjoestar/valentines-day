<script lang="ts">
	interface Props {
		content: string;
		clickHandler?: () => {};
	}

	let { content, clickHandler }: Props = $props();
</script>

<button
	class="rounded-lg border-2 border-gray-100 bg-pink-400 px-6 py-3 font-bold transition duration-300 ease-in-out hover:scale-110 hover:bg-pink-500"
	onclick={clickHandler}
>
	<span class="font-bold">{content}</span>
</button>
