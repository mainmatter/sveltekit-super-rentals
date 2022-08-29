<script>
	export let src;
	export let alt;

	let isLarge = false;

  function onToggleSize() {
    isLarge = !isLarge;
  }
</script>

{#if isLarge}
	<button on:click={onToggleSize} class="image large">
		<img {src} {alt} />
		<small>View Smaller</small>
	</button>
{:else}
	<button on:click={onToggleSize} class="image">
		<img {src} {alt} />
		<small>View Larger</small>
	</button>
{/if}
