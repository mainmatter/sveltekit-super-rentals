<script>
	export let rentals;
	export let query;

	// we want to make the query lowercase and remove trailing/leading spaces
	$: sanitisedQuery = query.toLowerCase().trim();

	$: results = query
		? rentals.filter((rental) => {
				return rental.title.toLowerCase().includes(sanitisedQuery);
		  })
		: rentals;
</script>

<slot {results} />
