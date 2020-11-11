<script>
  import Basic from './example/Basic.svelte'
</script>

<style>
    :global(.active) {
        color: red;
    }
    :global(img.active) {
        border: red 3px solid;
    }
    :global(figure) {
        background: #ccc;
    }
</style>

<Basic/>