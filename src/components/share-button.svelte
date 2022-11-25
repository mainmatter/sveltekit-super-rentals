<script>
	import { onMount } from 'svelte';

	const TWEET_INTENT = 'https://twitter.com/intent/tweet';

	export let text;
	export let hashtags;
	export let via;

	let shareURL;

	onMount(() => {
		let url = new URL(TWEET_INTENT);

		url.searchParams.set('url', window.location.href);

		if (text) {
			url.searchParams.set('text', text);
		}

		if (hashtags) {
			url.searchParams.set('hashtags', hashtags);
		}

		if (via) {
			url.searchParams.set('via', via);
		}

		shareURL = url.href;
	});
</script>

<a href={shareURL} target="_blank" rel="external nofollow noopener noreferrer" class="share button">
	<slot />
</a>
