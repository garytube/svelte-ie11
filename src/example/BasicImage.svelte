<script>
  export let image, activeCondition;
  const src = image.src
  const alt = image.alt
  const active = activeCondition()
  console.log(image)
  console.log(active)
</script>

<img class:active {src} {alt}/>