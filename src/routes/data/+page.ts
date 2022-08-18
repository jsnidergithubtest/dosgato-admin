import { api } from '$lib'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  const templates = await api.getTemplatesByType('DATA')
  return { templates }
}
