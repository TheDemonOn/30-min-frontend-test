<script lang="ts">
  import type { Tags } from "$lib/types"
  import VideoTag from "$lib/VideoTag.svelte"
  import { secondsToTimestamp } from "$lib/index"

  type Props = {
    slug: string
    title: string
    duration: number
    tags: Tags[]
  }

  let { slug, title, duration, tags }: Props = $props()
</script>

<article>
  <a data-sveltekit-preload-data="off" href={`/meditations/${slug}`}>
    <div class="imgContainer">
      <img alt={""} src={`https://cdn.healthygamer.gg/${slug}/thumbnails/360.jpg`} />
      <div class="duration">{secondsToTimestamp(duration)}</div>
    </div>
    <div class="title">{title}</div>
    <div class="tags">
      {#each tags as tag}
        <VideoTag {tag} />
      {/each}
    </div>
  </a>
</article>

<style>
  a {
    text-decoration: none;
  }

  .imgContainer {
    position: relative;
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }

  .duration {
    color: white;
    background-color: rgba(0, 0, 0, 0.751);
    border-radius: 5px;
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    padding: 0.1rem 0.2rem;
    font-size: 11px;
  }

  .title {
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .tags {
    display: flex;
  }
</style>
