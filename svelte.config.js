import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// to make it easier to handle module imports, we alias them here
		alias: {
			'@api': path.resolve('./static/api'),
			'@components': path.resolve('./src/components')
		}
	}
};

export default config;
