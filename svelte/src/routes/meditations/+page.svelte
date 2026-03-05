<script lang="ts">
  import { onDestroy } from "svelte"
  import { flip } from "svelte/animate"
  import { fade } from "svelte/transition"

  import Meditation from "$lib/Meditation.svelte"
  import FormatTag from "$lib/FormatTag.svelte"
  import { prefersReducedMotion } from "$lib/reduceMotionStore"
  import { meditations as unfilteredMeditations } from "$lib/meditations"
  import { animationDuration } from "$lib/index"

  import type { SelectTags } from "$lib/types"

  let selectedTag: SelectTags = $state("All Tags")
  let tags = [
    "All Tags",
    ...new Set(unfilteredMeditations.flatMap((meditation) => meditation.tags)),
  ] as SelectTags[]

  let meditations = $derived(
    unfilteredMeditations.filter((meditation) => {
      if (selectedTag !== "All Tags") {
        return meditation.tags.includes(selectedTag)
      } else {
        return unfilteredMeditations
      }
    }),
  )

  onDestroy(() => {
    prefersReducedMotion.destroy()
  })
</script>

<svelte:head>
  <title>Meditations</title>
</svelte:head>

<div>
  <div class="filters">
    <label for="filterSelect">Filter Videos by</label>
    <select id="filterSelect" bind:value={selectedTag}>
      {#each tags as tag}
        <option value={tag}> <FormatTag {tag} /></option>
      {/each}
    </select>
  </div>

  <div class="meditations">
    {#each meditations as meditation (meditation.title)}
      <div
        animate:flip={{ duration: $prefersReducedMotion ? 0 : animationDuration }}
        in:fade={{ duration: animationDuration }}
      >
        <Meditation
          slug={meditation.slug}
          title={meditation.title}
          duration={meditation.duration}
          tags={meditation.tags}
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .filters {
    margin-bottom: 2rem;
  }

  .filters label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .meditations {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  @media (max-width: 500px) {
    .meditations {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
</style>
