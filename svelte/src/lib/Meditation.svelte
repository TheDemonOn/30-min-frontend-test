<script lang="ts">
  type Props = {
    slug: string
    title: string
    duration: number
    tags: string[]
  }
  let { slug, title, duration, tags }: Props = $props()
</script>

<div class="meditation">
  <div class="placeholder-img"></div>
  <div class="duration">{duration}</div>
  <div class="title">{title}</div>
  <div class="tags">
    {#each tags as tag}
      <div class="tag">{tag}</div>
    {/each}
  </div>
</div>

<style>
  .meditation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .placeholder-img {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }

  .duration {
  }

  .tags {
  }

  .tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
  }
</style>
