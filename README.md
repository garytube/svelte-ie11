# svelte-ie11

Svelte JS Rollup Config for IE11 Support via `rollup-plugin-babel `

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
  "dependencies": {
    "@babel/core": "^7.8.0",
    "@babel/plugin-syntax-dynamic-import": "^7.8.0",
    "@babel/plugin-transform-runtime": "^7.8.0",
    "@babel/preset-env": "^7.8.2",
    "@babel/runtime": "^7.8.0",
    "core-js": "3",
    "rollup-plugin-babel": "^4.3.3",
    "sirv-cli": "^0.4.4",
    "whatwg-fetch": "^3.0.0"
  }
```
