import * as rentalsJson from '@api/rentals.json';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export const load = () => {
	const rentals = rentalsJson.data.map((value) => {
		const { id, attributes } = value;
		let type = 'Community';

		if (!COMMUNITY_CATEGORIES.includes(attributes.category)) {
			type = 'Standalone';
		}

		return { id, type, ...attributes };
	});

	if (rentals) {
		return { rentals };
	}
};
