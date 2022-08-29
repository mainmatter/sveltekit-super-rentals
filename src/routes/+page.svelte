<script>
  import Jumbo from '@components/jumbo.svelte';
	import Rental from '@components/rental/index.svelte';

	export let data;
</script>

<Jumbo>
	<h2>Welcome to Super Rentals!</h2>
	<p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a href="/about" class="button">About Us</a>
</Jumbo>

<div class="rentals">
	<ul class="results">
		{#each data.rentals as rental}
			<li><Rental {rental} /></li>
		{/each}
	</ul>
</div>
