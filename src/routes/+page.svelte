<script>
  import Jumbo from '@components/jumbo.svelte';
	import Rental from '@components/rental/index.svelte';
</script>

<Jumbo>
	<h2>Welcome to Super Rentals!</h2>
	<p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a href="/about" class="button">About Us</a>
</Jumbo>

<div class="rentals">
	<ul class="results">
		<li><Rental /></li>
		<li><Rental /></li>
		<li><Rental /></li>
	</ul>
</div>
