<script lang="ts">
  import FormatTag from "./FormatTag.svelte"
  import type { Tags } from "$lib/types"
  type Props = {
    tag: Tags
  }
  let { tag }: Props = $props()
</script>

<div class={["tag", tag]}>
  <FormatTag {tag} />
</div>

<style>
  .tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 4px 8px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .meditation {
    color: var(--meditation);
    background-color: var(--meditation-bg);
  }
  .anxiety {
    color: var(--anxiety);
    background-color: var(--anxiety-bg);
  }
  .depression {
    color: var(--depression);
    background-color: var(--depression-bg);
  }
  .adhd {
    color: var(--adhd);
    background-color: var(--adhd-bg);
  }
  .trauma {
    color: var(--trauma);
    background-color: var(--trauma-bg);
  }
</style>
