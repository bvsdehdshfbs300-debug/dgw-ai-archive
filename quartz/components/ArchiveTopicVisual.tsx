import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const topics: Record<string, [string, string, string, number, number]> = {
  "产品与教学": ["hardware.png", "外设、接口与逐针手册", "教学平台的真实界面", 1440, 900],
  "代表作品": ["cases/tide-system.png", "从网页到板端的作品实践", "潮汐作曲家实物运行照片", 1280, 720],
  "关于我": ["notes/now.svg", "沿着三条创作主线认识地瓜丸", "当前作品方向的整理快照", 1100, 450],
  "技术架构": ["tide-tech/architecture.svg", "潮汐作曲家的系统关系", "基于工程资料绘制的技术示意图", 1100, 710],
  "内容创作": ["notes/promo-cover.png", "用真实操作讲清功能", "已交付的横屏宣传片封面", 1920, 1080],
  "实践能力": ["notes/capabilities.svg", "从作品里阅读能力", "能力与案例的关系示意", 1100, 710],
  "网站维护": ["cases/maintenance-launcher.png", "把网站维护落实到具体环节", "本机服务阶段的历史启动记录", 1843, 942],
  "问题与迭代": ["notes/debugging.svg", "从现象走到可复查的修改", "排查路径示意", 1100, 450],
  "ai协作": ["notes/collaboration.svg", "目标、实现与共同验证", "协作职责示意", 1100, 450],
  "fpga实践": ["cases/tide-board.jpg", "让逻辑在板端运行", "潮汐作曲家开发板实物照片", 1279, 1706],
  "品牌角色": ["mascot/mascot-celebrating.png", "认识地瓜丸的吉祥物", "同一个角色，贯穿平台与教程", 512, 512],
  "更多作品": ["cases/tide-system.png", "工作室的其他项目", "从 FPGA 实物延伸到感知、控制与交互", 1280, 720],
  "交互与游戏": ["projects/sword-duel-interface.png", "不归砚的标题界面", "现有网页游戏原型的界面存档", 1440, 1000],
  "软件工具": ["projects/everyday-interface.png", "Everyday 像素任务界面", "本机现有界面截图", 1440, 1000],
}

export default (() => {
  function ArchiveTopicVisual({ fileData }: QuartzComponentProps) {
    const slug = String(fileData.slug ?? "")
    if (!slug.startsWith("tags/")) return null
    const [asset, title, caption, width, height] = topics[slug.slice(5)] ?? ["notes/capabilities.svg", "从主题进入具体作品", "作品与实践方向示意", 1100, 710]
    const src = "../assets/" + asset
    const hasMobile = asset.endsWith(".svg")
    const mobileSizes: Record<string, [number, number]> = {
      "notes/now.svg": [460, 776], "notes/capabilities.svg": [460, 840],
      "notes/debugging.svg": [460, 776], "notes/collaboration.svg": [460, 776],
      "tide-tech/architecture.svg": [420, 1080],
    }
    const [mobileWidth, mobileHeight] = mobileSizes[asset] ?? [width, height]
    // Every SVG selected here has an independently composed mobile counterpart.
    return <figure class="case-figure topic-visual">
      <a class="case-image-link" href={src}>
        <picture>
          {hasMobile && <source media="(max-width:600px)" srcSet={src.replace(".svg", "-mobile.svg")} width={mobileWidth} height={mobileHeight} />}
          <img src={src} alt={title} width={width} height={height} loading="eager" decoding="async" />
        </picture>
      </a>
      <figcaption>{caption}<span>点击查看大图 ↗</span></figcaption>
    </figure>
  }
  return ArchiveTopicVisual
}) satisfies QuartzComponentConstructor
