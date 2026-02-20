<script lang="ts">
  import Meditation from "$lib/Meditation.svelte"

  import { meditations } from "$lib/meditations"

  let selectedTag = $state("All Tags")
  let tags = ["All Tags", ...new Set(meditations.flatMap((meditation) => meditation.tags))]
</script>

<div class="page">
  <div class="filters">
    <select bind:value={selectedTag}>
      {#each tags as tag}
        <option value={tag}>{tag}</option>
      {/each}
    </select>
  </div>

  <div class="meditations">
    {#each meditations as meditation}
      <Meditation
        slug={meditation.slug}
        title={meditation.title}
        duration={meditation.duration}
        tags={meditation.tags}
      />
    {/each}
  </div>
</div>

<style>
  .page {
  }

  select {
    background: var(--background);
    color: var(--text);
  }

  .meditations {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
    gap: 16px;
  }
</style>
