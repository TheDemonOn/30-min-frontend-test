<script lang="ts">
  function goBack() {
    history.back()
  }

  interface Params {
    slug: string
  }

  let { params }: { params: Params } = $props()
</script>

<svelte:head>
  <title>404 Error</title>
</svelte:head>

<h1>404 Error</h1>
<h2>{params.slug} was not found</h2>
<p>Will it ever...</p>
<button onclick={goBack}>Go Back</button>

<style>
  button:focus-visible {
    outline: 3px solid var(--focus-visible);
    outline-offset: 3px;
  }
</style>
