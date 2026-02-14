import type { Snippet } from 'svelte';

interface Dialog {
	content: string;
	image: string;
	imageAlt: string;
	buttons: Snippet;
}
