<script>
  import BasicImage from './BasicImage.svelte'
  const title = 'Basic Usages';


  let image = {
    src : 'https://active.thesaracen.com/img/banner/image/0/edd57fd9b06b654fc2461612734f5c44.jpg',
    alt : 'SARACEN LOGO'
  };
  const isSaracenActive = (src) => src.includes('thesaracen.com')


  let count = 1
  const handleClick = () => {
    count += 1
  }

  $: doubled = count * 2
  $: if (count >= 5) {
    console.log('$: statement is label.')
  }

  const htmlDirective = `<span class="active">${count} x 2 = ${doubled}</span>`

</script>

<style>

</style>

<fieldset>
    <figure>{title}</figure>

    <BasicImage {image} activeCondition={() => isSaracenActive(image.src)}/>

    <button
            on:click={handleClick}
    >clicked {count}
    </button>

    <p>

    {@html htmlDirective}
</fieldset>
