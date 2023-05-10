# CONTRIBUTING.md

a.k.a. a memo for myself

### How to deploy

Just push to the `release` branch! GitHub Actions `gh-pages` job should do the deployment automatically.

### How to add modules

There are four places you have to change:

- `index.html`
  - Add the module to the [import map](https://developer.mozilla.org/ja/docs/Web/HTML/Element/script/type/importmap)!
- `package.json`
  - Simply install the module using `yarn add -D <module>` !
  - It's required to import the type definition
- `bin/prepare-types.mjs`
  - It's required to install the type definition to the monaco editor
- `README.md`
  - Add to the `Currently Available Modules` section. For documentation
