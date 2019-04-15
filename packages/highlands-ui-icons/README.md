# @highlands/highlands-ui-icons

Highlands Svg Icons converted React components.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @highlands/highlands-ui-icons

// with yarn
yarn add @highlands/highlands-ui-icons
```
## Generating Icons

To generate React icon components from SVGs, first put the SVGs in the `/svgs/` folder then run:

```sh
yarn src:icons
```

Make sure to follow the naming scheme of `{icon-name}-icon.svg`

## Testing

To test that the components compile without errors run:

```sh
yarn start
```

## Build

To build the components just run:

```sh
yarn build
```

The built component js will be in `/dist/`.

## Publish

To publish the package to npm run:

```sh
yarn release
```
