<script context="module">
	import { PUBLIC_MAPBOX_TOKEN } from '$env/static/public';
	const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
</script>

<script>
	export let lat;
	export let lng;
	export let height;
	export let width;
	export let zoom;
	export let alt = `Map image at coordinates ${lat},${lng}`;
	export let styleClass = '';

	$: src = `${MAPBOX_API}/${lng},${lat},${zoom}/${width}x${height}@2x?access_token=${PUBLIC_MAPBOX_TOKEN}`;
</script>

<div class="map {styleClass}">
	<img {alt} {src} {width} {height} />
</div>
