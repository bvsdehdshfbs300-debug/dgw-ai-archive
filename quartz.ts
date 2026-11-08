import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import ArchiveNavigation from "./quartz/components/ArchiveNavigation"
import CaseCapabilities from "./quartz/components/CaseCapabilities"
import ArchiveMedia from "./quartz/components/ArchiveMedia"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
for (const [type, slots] of [["default", layout.defaults], ...Object.entries(layout.byPageType)] as const) {
  if (type === "404") continue
  slots.left = [...(slots.left ?? []), ArchiveNavigation()]
  slots.right = [CaseCapabilities(), ...(slots.right ?? [])]
  slots.afterBody = [...(slots.afterBody ?? []), ArchiveMedia()]
}
// Quartz 5 creates its dispatcher while loading YAML, before this custom layout exists.
// Replace that dispatcher with one using the same page types and our augmented slots.
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
