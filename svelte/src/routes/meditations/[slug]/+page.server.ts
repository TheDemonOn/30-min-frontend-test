import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
  error(404, `${params.slug} was not found... will it ever?`)
}
