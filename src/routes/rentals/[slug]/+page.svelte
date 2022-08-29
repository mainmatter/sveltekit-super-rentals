<script context="module">
	import Jumbo from '@components/jumbo.svelte';
	import Map from '@components/map.svelte';
	import RentalImage from '@components/rental/image.svelte';
  import ShareButton from '@components/share-button.svelte'
</script>

<script>
	export let data;
	let rental = data.rental;
</script>

<Jumbo>
  <h2>{rental.title}</h2>
  <p>Nice find! This looks like a nice place to stay near {rental.city}.</p>
	<ShareButton
		text="Check out {rental.title} on Super Rentals!"
		hashtags="vacation,travel,authentic,blessed,superrentals"
		via="sveltejs"
	>
		Share on Twitter
	</ShareButton>
</Jumbo>

<article class="rental detailed">
  <RentalImage src={rental.image} alt="A picture of {rental.title}" />

  <div class="details">
    <h3>About {rental.title}</h3>

    <div class="detail owner">
      <span>Owner:</span>
      {rental.owner}
    </div>
    <div class="detail type">
      <span>Type:</span>
      {rental.type} – {rental.category}
    </div>
    <div class="detail location">
      <span>Location:</span>
      {rental.city}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span>
      {rental.bedrooms}
    </div>
    <div class="detail description">
      <p>{rental.description}</p>
    </div>
  </div>

  <Map
    lat={rental.location.lat}
    lng={rental.location.lng}
    zoom="12"
    width="894"
    height="600"
    alt="A map of {rental.title}"
    styleClass="large"
  />
</article>
