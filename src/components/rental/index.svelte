<script>
	import RentalImage from './image.svelte';
	import Map from '@components/map.svelte';

	export let rental
</script>

<article class="rental">
	<RentalImage src={rental.image} alt={rental.description} />
	<div class="details">
		<h3>
			<a href="rentals/{rental.id}">
				{rental.title}
			</a>
		</h3>
		<div class="detail owner">
			<span>Owner:</span> {rental.owner}
		</div>
		<div class="detail type">
			<span>Type:</span> {rental.type}
		</div>
		<div class="detail location">
			<span>Location:</span> {rental.city}
		</div>
		<div class="detail bedrooms">
			<span>Number of bedrooms:</span> {rental.bedrooms}
		</div>
	</div>
	<Map
		lat={rental.location.lat}
		lng={rental.location.lng}
		zoom="9"
		width="150"
		height="150"
		alt="A map of {rental.title}"
	/>
</article>
