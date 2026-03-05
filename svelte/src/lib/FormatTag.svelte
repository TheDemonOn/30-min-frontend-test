<script lang="ts">
  import type { Tags, SelectTags } from "$lib/types"
  import { capitalizeFirstChar } from "$lib/index"

  type Props = {
    tag: Tags | SelectTags
  }
  let { tag }: Props = $props()
</script>

{#if tag === "adhd"}
  {tag.toUpperCase()}
{:else}
  {capitalizeFirstChar(tag)}
{/if}
