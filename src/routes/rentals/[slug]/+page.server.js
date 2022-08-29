const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export async function load({ params }) {
	const rentals = import.meta.glob('@api/rentals/*.json');
	let rental = null;
	for (const key of Object.keys(rentals)) {
		if (key.includes(params.slug)) {
			rental = rentals[key];
		}
	}
	if (rental) {
		const { data } = await rental();
		const { attributes } = data;
		let type;

		if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
			type = 'Community';
		} else {
			type = 'Standalone';
		}

		return { rental: { ...attributes, type } };
	}
}
