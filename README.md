# Ansta

> Example people-listing single page application using VueJS

You can see working deployment here, on [GitHub Pages](https://lepczynski-s.github.io/ansta).

For the sake of an example application uses an in-memory only database repository
implemented using NeDB Datastore and wrapped as a custom Vue plugin.

Every time the application starts all data gets repopulated using FakerJS.

## External dependencies

There are no external dependencies - no database, not api backend, no nothing.
Everything gets installed using `npm install`.

## Steps to run

``` bash
# clone & cd into directory
git clone https://github.com/lepczynski-s/ansta.git

# install dependencies
npm install

# run development server & open your browser at http://localhost:8080
npm run dev

# or build for production with minification, etc
npm run build
```
