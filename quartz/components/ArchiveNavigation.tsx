import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const groups = [
  {title: "作品案例", items: [["platform", "FPGA 教学平台"], ["tide-composer", "潮汐作曲家"], ["maintenance", "网站维护实践"]]},
  {title: "能力与个人介绍", items: [["skills", "能力与作品证据"], ["about", "关于地瓜丸"], ["now", "最近在做什么"], ["timeline", "更新与成长记录"]]},
  {title: "平台设计与实验", items: [["waveform", "把波形真正看清"], ["hardware", "硬件与逐针手册"], ["streaming", "高速数据流与外设"], ["interaction", "交互与信息呈现"], ["fpga", "FPGA 与数字逻辑"], ["web", "把功能做成网页"]]},
  {title: "调试与 AI 协作", items: [["debugging", "从反馈定位问题"], ["workflow", "从想法到上线"], ["ai-collaboration", "怎样与 AI 做项目"], ["decisions", "做取舍的原则"]]},
  {title: "创作与联系", items: [["content-creation", "真实功能演示"], ["remotion", "Remotion 动画"], ["contact", "账号与联系入口"]]},
]

export default (() => {
  function ArchiveNavigation({ fileData }: QuartzComponentProps) {
    const slug = String(fileData.slug ?? "index")
    const prefix = "../".repeat(slug.split("/").length - 1) || "./"
    return <nav class="archive-navigation" aria-label="档案分类导航">
      <details class="archive-nav-shell" open>
        <summary>浏览档案 <span>按主题阅读</span></summary>
        <div class="archive-nav-content">
          <a class="archive-overview" href={prefix + "index.html"} aria-current={slug === "index" ? "page" : undefined}>作品首页 <span>↗</span></a>
          {groups.map(group => <details class="archive-nav-group" open={group.items.some(([id]) => id === slug) || (slug === "index" && group.title === "作品案例")}>
            <summary>{group.title}<span>{group.items.length}</span></summary>
            <ul>{group.items.map(([id, title]) => <li><a href={prefix + id + ".html"} aria-current={slug === id ? "page" : undefined}>{title}</a></li>)}</ul>
          </details>)}
          <a class="archive-graph-link" href={prefix + "graph/"}>探索作品关系图 <span>↗</span></a>
        </div>
      </details>
    </nav>
  }
  ArchiveNavigation.afterDOMLoaded = `(() => {
    const initialize = () => {
      const shell = document.querySelector('.archive-nav-shell');
      if (shell) shell.open = window.matchMedia('(min-width: 801px)').matches;
    };
    initialize(); document.addEventListener('nav', initialize);
  })();`
  return ArchiveNavigation
}) satisfies QuartzComponentConstructor
