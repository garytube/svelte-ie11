import App from './App.svelte'
import 'whatwg-fetch' // fetch polyfill for IE 11

export default new App({
  target: document.body,
  props: {
		name: 'world'
	}
})
