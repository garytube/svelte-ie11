# Svelte Internet Explorer 11 (IE11) Supported Boilerplate

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
const legacySupport = true // if set the true then babelConfig used.

import babel from 'rollup-plugin-babel'
const babelConfig = {
  extensions: ['.js', '.mjs', '.html', '.svelte'],
  runtimeHelpers: true,
  exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
          chrome: '59',
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: true,
      },
    ],
  ],
}
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
