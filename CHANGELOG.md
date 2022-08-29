# Changelog

## Part 1.1: Orientation

- Add styles to `static/app.css` and reference it in the `app.html` file,
- Create new `static/images` folder,
- Add Tomster to `static/images/` folder,
- Add welcome message to routes/+page.svelte
- Add the `alias` attribute to the `svelte.config.js` file to make importing files easier
- Specify routes in the `vite.config.js` and `playwright.config.js` files to allow for easier development and testing

## Part 1.2: Building pages

- Create a new page for `about`
- Create a new page for `getting-in-touch`
- Add links between the pages

## Part 1.3: Automated testing

- Update the `tests/test.js` file to align with the usage in our app

## Part 1.4: Component basics

- Add a new `+layout.svelte` route to handle the global navigation bar
- Add the new `nav-bar.svelte` component
- Add the new `jumbo.svelte` component
- Add `@components` to the aliases in the `svelte.config.js`
- Update the routes to use the `Jumbo` component
- Add a new test to make sure the `nav-bar` component is functioning as expected

## Part 1.5: More about components

- Add the `rental/index` and `rental/image` components
- Hardcode some data to showcase the new components (this will be populated from somewhere else in the future)

## Part 1.6: Interactive components

- Update the `Rental/Image` component to be interactive

## Part 1.7: Reusable components

- Create the new `Map` component
- Add the Mapbox integration
- Add a new `.env` file with the Mapbox integration key
- Update test to look for map element

## Part 1.8: Working with data

- Add seed data, in the form of JSON files, to the project
- Add `@api` to the aliases in the `svelte.config.js`
- Update the `index` route to load the data from the JSON file
- Update the existing `Rental` component to receive the loaded data from the `index` route

## Part 2.1: Route params

- Add the `rentals/[slug]` route to display an individual rental
- Update the `Map` component to accept a `styleClass`
- Fetch the data for the specific rental inside the `rental/[slug]` route
- Add tests to check the new functionality
