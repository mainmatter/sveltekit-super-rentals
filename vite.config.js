import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// make sure the `preview` command always uses port 3000 as it is used for the tests
	preview: {
		port: 3000,
		strictPort: true
	},
	// I like to have both the preview and dev server on the same port so that I can run the tests while in the dev environment
	server: {
		port: 3000,
		strictPort: true
	}
};

export default config;
