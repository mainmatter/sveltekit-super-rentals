import { expect, test } from '@playwright/test';

test('visiting /', async ({ page }) => {
	// go to the index route
	await page.goto('/');
	// assert we are on the correct page
	expect(page).toHaveURL('/');
	// assert the title of the page is correct
	expect(await page.textContent('h2')).toBe('Welcome to Super Rentals!');
	// assert the map images are visible
	await expect(page.locator('.map img')).toHaveCount(3);
	// assert the text on the link is correct
	expect(await page.textContent('.jumbo a.button')).toBe('About Us');
	// click on the link to take us to the `about` page
	await page.locator('.jumbo a.button').click();
	// assert that we are on the correct page
	await expect(page).toHaveURL('/about');
});

test('visiting /about', async ({ page }) => {
	// go to the about route
	await page.goto('/about');
	// assert we are on the correct page
	expect(page).toHaveURL('/about');
	// assert the title of the page is correct
	expect(await page.textContent('h2')).toBe('About Super Rentals');
	// assert the text on the link is correct
	expect(await page.textContent('.jumbo a.button')).toBe('Contact Us');
	// click on the link to take us to the `getting-in-touch` page
	await page.locator('.jumbo a.button').click();
	// assert that we are on the correct page
	await expect(page).toHaveURL('/getting-in-touch');
});

test('visiting /getting-in-touch', async ({ page }) => {
	// go to the getting-in-touch route
	await page.goto('/getting-in-touch');
	// assert we are on the correct page
	expect(page).toHaveURL('/getting-in-touch');
	// assert the title of the page is correct
	expect(await page.textContent('h2')).toBe('Contact Us');
	// assert the text on the link is correct
	expect(await page.textContent('.jumbo a.button')).toBe('About');
	// click on the link to take us to the `about` page
	await page.locator('.jumbo a.button').click();
	// assert that we are on the correct page
	await expect(page).toHaveURL('/about');
});

test('navigating using the nav-bar', async ({ page }) => {
	// Go to the index route
	await page.goto('/');
	// Click nav >> text=About
	await page.locator('nav >> text=About').click();
	await expect(page).toHaveURL('/about');
	// Click nav >> text=Contact
	await page.locator('nav >> text=Contact').click();
	await expect(page).toHaveURL('/getting-in-touch');
	// Click h1:has-text("SuperRentals")
	await page.locator('h1:has-text("SuperRentals")').click();
	await expect(page).toHaveURL('/');
});

test('viewing the details of a rental property', async ({ page }) => {
	// Go to the index route
	await page.goto('/');
	// Assert there there 3 properties displayed
	await expect(page.locator('.rental')).toHaveCount(3);

	// Click on a rental
	await page.locator('text=Grand Old Mansion').click();

	// Assert that the share button is visible and has the correct attributes
	expect(await page.textContent('.share.button')).toBe('Share on Twitter');
	const href = await page.getAttribute('.share.button', 'href');
	const tweetURL = new URL(href);
	expect(tweetURL.host).toBe('twitter.com');
	expect(tweetURL.searchParams.get('url')).toBe(`${[page.url()]}`);

	// Assert it has taken you to the rental page
	await expect(page).toHaveURL('/rentals/grand-old-mansion');
});

test('visiting /rentals/grand-old-mansion', async ({ page }) => {
	// Go to the rental page
	await page.goto('/rentals/grand-old-mansion');
	// Assert we are on the current URL
	await expect(page).toHaveURL('/rentals/grand-old-mansion');

	// Assert the nav exists
	await expect(page.locator('nav')).toBeVisible();
	// Assert the main title is still correct
	expect(await page.textContent('h1')).toBe('SuperRentals');
	// Assert the page title has the correct text
	expect(await page.textContent('h2')).toBe('Grand Old Mansion');
	// Assert the rental detail area is visible
	await expect(page.locator('.rental.detailed')).toBeVisible();
});
