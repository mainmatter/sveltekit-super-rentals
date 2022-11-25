<script>
	import Jumbo from '@components/jumbo.svelte';
	import Rental from '@components/rental/index.svelte';
	import RentalsFilter from '@components/rentals-filter.svelte';

	export let data;

	let query = '';
</script>

<Jumbo>
	<h2>Welcome to Super Rentals!</h2>
	<p>We hope you find exactly what you're looking for in a place to stay.</p>
	<a href="/about" class="button">About Us</a>
</Jumbo>

<div class="rentals">
	<label>
		<span>Where would you like to stay?</span>
		<input class="light" bind:value={query} />
	</label>

	<RentalsFilter {query} rentals={data.rentals} let:results>
		<ul class="results">
			{#each results as rental}
				<li><Rental {rental} /></li>
			{/each}
		</ul>
	</RentalsFilter>
</div>
