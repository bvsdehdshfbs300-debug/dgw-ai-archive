import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const cases: Record<string, {title: string, status: string, skills: [string, string][], next: [string, string]}> = {
  platform: {title: "把练习做成产品", status: "4.1 · 持续维护", skills: [["product", "教学与产品设计"], ["web", "网页交互"], ["debug", "反馈与验证"]], next: ["maintenance", "网站如何持续运行"]},
  "tide-composer": {title: "让想法在板上运行", status: "有实物演示 · 已固化", skills: [["fpga", "FPGA 图像与音频"], ["hardware", "板端调试"], ["debug", "构建与验证"]], next: ["platform", "把硬件知识做成练习"]},
  maintenance: {title: "把问题追到具体环节", status: "本机阶段 → 云端部署", skills: [["operations", "部署与运维"], ["debug", "故障定位"], ["product", "使用体验"]], next: ["tide-composer", "另一个硬件项目案例"]},
}

export default (() => {
  function CaseCapabilities({ fileData }: QuartzComponentProps) {
    const slug = String(fileData.slug ?? "")
    const item = cases[slug]
    if (!item) return null
    return <section class="case-capabilities" aria-label="本案例相关能力">
      <p class="rail-kicker">这件作品说明什么</p>
      <h2>{item.title}</h2><p class="rail-status">{item.status}</p>
      <ul>{item.skills.map(([id, title]) => <li><a href={"./skills.html#" + id}>{title}<span>↗</span></a></li>)}</ul>
      <a class="rail-next" href={"./" + item.next[0] + ".html"}>{item.next[1]} →</a>
    </section>
  }
  return CaseCapabilities
}) satisfies QuartzComponentConstructor
