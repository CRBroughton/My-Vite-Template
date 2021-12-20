# My Vite Template

This is my Vite template, which includes:

- Vite
- Vue 3.2
- Typescript
- Pinia
- ESLint (antfu/eslint-config)
- Cypress (Unit, e2e testing and code coverage reports)
- unplugin-vue-components
- unplugin-auto-import
- WindiCSS
- SASS
- Vue Router (using vite-plugin-pages)
- @/ Alias

## Installation

It's recommended to use pnpm to install this template:

```
pnpm i
```

or by using npm:

```
npm i --legacy-peer-deps
```

## Checking For Updates

This template is regularly updated, however if you need to manually update a package, use the `pnpm:check` script, or run the below command:

```
NPM_CHECK_INSTALLER=pnpm npm-check -u
```

## Recommended Extensions

I've included all the extensions I use on a daily basis. Feel free to disable
or not install any that you feel you wouldn't use.

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
