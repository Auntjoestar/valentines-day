<script lang="ts">
	import heartBear from '$lib/assets/heart_love_bear.gif';
	import heartBearThrowing from '$lib/assets/heart_throwing.gif';
	import heartBearEyes from '$lib/assets/heart_eyes.gif';
	import tbh from '$lib/assets/yippee-tbh.mp3';
	import Button from './Button.svelte';
	import type { Dialog as DialogT } from './Dialog';
	import { dialogState } from './shared.svelte';
	import Dialog from './Dialog.svelte';

	const dialogs: Map<string, DialogT> = new Map([
		[
			'question',
			{
				content: '¿Te gustaría ser mi San Valentín?',
				image: heartBear,
				imageAlt: 'Bear throwing hearts in the air',
				buttons: yesNo
			}
		],
		[
			'no',
			{
				content: 'No puedes librarte de mi tan facilmente!!! >:3',
				image: heartBearThrowing,
				imageAlt: 'Bear throwing heart at screen',
				buttons: yes
			}
		],
		[
			'yes',
			{
				content: 'YEII YEIII YIPEEE YIPEEE YEIII <3333, FELIZ SAN VALENTIN',
				image: heartBearEyes,
				imageAlt: 'Bear with hearts in her eyes',
				buttons: yipeee
			}
		]
	]);

	let dialog = $derived(dialogs.get(dialogState.dialog)!);
</script>

{#snippet yesNo()}
	<div class="flex w-full justify-center gap-20 md:gap-42">
		<Button
			content="Sí :)"
			clickHandler={() => setTimeout(() => (dialogState.dialog = 'yes'), 120)}
		/>
		<Button
			content="No :("
			clickHandler={() => setTimeout(() => (dialogState.dialog = 'no'), 120)}
		/>
	</div>
{/snippet}

{#snippet yes()}
	<div class="flex w-full justify-center">
		<Button
			content="Sí <333"
			clickHandler={() => setTimeout(() => (dialogState.dialog = 'yes'), 120)}
		/>
	</div>
{/snippet}

{#snippet yipeee()}
	<div class="flex w-full justify-center">
		<Button
			content="YIPEEEE :DDD"
			clickHandler={() => setTimeout(() => new Audio(tbh).play(), 50)}
		/>
	</div>
{/snippet}

<div class="flex h-full w-full items-center justify-center py-10 md:px-30">
	<Dialog dialog={dialog.content} imgSrc={dialog.image} imgAlt={dialog.imageAlt}>
		{@render dialog.buttons()}
	</Dialog>
</div>
