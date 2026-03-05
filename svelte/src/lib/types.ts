export interface Meditations {
  slug: string
  title: string
  duration: number
  tags: Tags[]
}

export type Tags = "meditation" | "anxiety" | "depression" | "adhd" | "trauma"

export type SelectTags = "All Tags" | Tags
