# My Vite Template

This is my Vite template, which includes:

- Vite
- Vue 3.2
- Typescript
- Pinia
- ESLint (antfu/eslint-config)
- Jest
- Cypress
- unplugin-vue-components
- WindiCSS
- Vue Router (using vite-plugin-pages)
- @/ Alias

## Alternative Version

Checkout the release/auto-import branch for auto importing modules,
however this version lacks Jest.

## Recommended Extensions

I've included all the extensions I use on a daily basis. Feel free to disable
or not install any that you feel you wouldn't use.

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
