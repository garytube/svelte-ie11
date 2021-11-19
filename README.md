# svelte IE11  and FETCH Support

Svelte JS Rollup Config for IE11 Support via `rollup-plugin-babel `
Also allow support for Async/Await Syntax. Usefuell if your App needs to run on some sort of embeded Systems.

#### Fetch Support

```js
// src/main.js
import App from './App.svelte'
import 'whatwg-fetch' // fetch polyfill for IE 11

export default new App({
  target: document.body,
})
```

#### Config

You can disable IE11 Support via ``rollup.config.js`

```js
...
const legacySupport = true // enable for IE11 Support
...
```

#### Dependencies

```
  "devDependencies": {
    "@rollup/plugin-commonjs": "^17.0.0",
    "@rollup/plugin-node-resolve": "^11.0.0",
    "rollup": "^2.39.0",
    "rollup-plugin-css-only": "^3.1.0",
    "rollup-plugin-livereload": "^2.0.0",
    "rollup-plugin-svelte": "^7.1.0",
    "rollup-plugin-terser": "^7.0.2",
    "svelte": "^3.32.3"
  },
  "dependencies": {
    "@babel/core": "^7.12.17",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.12.17",
    "@babel/preset-env": "^7.12.17",
    "@babel/runtime": "^7.12.18",
    "core-js": "3",
    "rollup-plugin-babel": "^4.3.3",
    "sirv-cli": "^1.0.11",
    "whatwg-fetch": "^3.6.1"
  }
```
