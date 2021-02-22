<script>
	let promise = fetchMockPhotos()

	async function fetchMockPhotos() {
		const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
		const photos = await res.json()

		if (res.ok) {
			return photos
		} else {
			throw new Error('Something went wrong.')
		}
	}
</script>

<div>
	<hr />
	<p>Loading Data with Fetch()</p>
	{#await promise}
		<p>...loading with async fetch</p>
	{:then photos}
		<pre>
    <code>
      <code>
        {JSON.stringify(photos, null, 2)}
      </code>
    </code>
  </pre>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>
