# @mijoco/stx_components

Components shared across stx.eco applications.

Read more about creating a library [in the docs](https://kit.svelte.dev/docs/packaging).

## Creating a project

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

- `src/lib` is library
- `src/routes` to preview app

## Building

To build your library:

```bash
npm run package
```

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish --access public
```

## Packing

Test the components prior to publishing.

```bash
npm run build
npm pack
mv mijoco-stxeco_components-0.0.xx.tgz ../stxeco-launcher
```

in stxeco-launcher;

```bash
npm install ./mijoco-stxeco_components-0.0.xx.tgz
```
