/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		// make sure to use the same port as the `preview` command
		port: 3000,
		// this is useful to allow the default port to be reused even if the port was accidentally left open when closing another terminal window
		reuseExistingServer: true
	}
};

export default config;
