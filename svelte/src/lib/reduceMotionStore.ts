import { writable, type Readable } from "svelte/store"

interface MotionStore extends Readable<boolean> {
  destroy: () => void
}

function createMotionStore(): MotionStore {
  const { subscribe, set } = writable<boolean>(false)
  let mediaQuery: MediaQueryList | undefined
  let handler: ((e: MediaQueryListEvent) => void) | undefined

  if (typeof window !== "undefined") {
    mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    set(mediaQuery.matches)

    handler = (e) => set(e.matches)
    mediaQuery.addEventListener("change", handler)
  }

  return {
    subscribe,
    destroy: () => {
      if (mediaQuery && handler) {
        mediaQuery.removeEventListener("change", handler)
      }
    },
  }
}

/**
 * Creates a store that tracks the user's prefers-reduced-motion preference.
 * 
 * @returns {MotionStore} A store with a `subscribe` method and `destroy` cleanup function
 * 
 * @example
 * import { prefersReducedMotion } from "$lib/reduceMotionStore"
 * onDestroy(() => {
      prefersReducedMotion.destroy()
   })
 * <div animate:flip={{ duration: $prefersReducedMotion ? 0 : animationDuration }}>
 */
export const prefersReducedMotion = createMotionStore()
