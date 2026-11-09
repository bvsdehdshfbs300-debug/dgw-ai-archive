import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const groups = [
  {title: "教学平台 · 从这里开始", items: [["platform", "平台功能与真实演示"], ["feature-tour", "平台功能实景图鉴"], ["waveform", "波形台"], ["hardware", "3D 板卡与逐针手册"], ["streaming", "数据流与外设关卡"], ["mascot", "认识我们的吉祥物"]]},
  {title: "我做过的项目", items: [["projects", "全部项目总览"], ["tide-composer", "潮汐作曲家"], ["tide-technology", "潮汐 · 技术架构"], ["flexstep", "FlexStep 柔性步态感知"], ["acoustic-terminal", "双麦声学终端"], ["wearifi", "WeariFi 柔域智感"], ["fuma-unit", "FUMA / UNIT"], ["ota-method", "脑电与 OTA · 方法"], ["auto-aim", "简易自行瞄准装置"], ["ball-balance", "平衡滚球控制"], ["mouse-gimbal", "鼠标双轴云台 · 两版"], ["maixcam-tracking", "MaixCAM 视觉追踪"], ["ai-monitor", "AI 监控台"], ["everyday", "Everyday 像素清单"], ["game-security-ai", "游戏安全 AI 分类"], ["ural-echo", "乌拉尔回响"], ["sword-duel", "不归砚 / Sword Duel"]]},
  {title: "能力与个人介绍", items: [["skills", "能力与作品证据"], ["about", "关于地瓜丸"], ["now", "最近在做什么"], ["timeline", "更新与成长记录"]]},
  {title: "平台背后的设计", items: [["interaction", "交互与信息呈现"], ["fpga", "FPGA 与数字逻辑"], ["web", "把功能做成网页"], ["maintenance", "网站维护实践"]]},
  {title: "调试与 AI 协作", items: [["debugging", "从反馈定位问题"], ["workflow", "从想法到上线"], ["ai-collaboration", "怎样与 AI 做项目"], ["decisions", "做取舍的原则"]]},
  {title: "创作与联系", items: [["content-creation", "真实功能演示"], ["remotion", "Remotion 动画"], ["contact", "去找地瓜丸→"]]},
]

export default (() => {
  function ArchiveNavigation({ fileData }: QuartzComponentProps) {
    const slug = String(fileData.slug ?? "index")
    const prefix = "../".repeat(slug.split("/").length - 1) || "./"
    return <nav class="archive-navigation" aria-label="档案分类导航">
      <a class="nav-mascot-brand" href={prefix+"mascot.html"}><img src={prefix+"assets/mascot/mascot-explaining.png"} alt="地瓜丸的吉祥物" width="48" height="48"/><span>一座有温度的<br/>FPGA 学习实验室</span></a>
      <details class="archive-nav-shell" open>
        <summary>浏览档案 <span>按主题阅读</span></summary>
        <div class="archive-nav-content">
          <a class="archive-overview" href={prefix + "index.html"} aria-current={slug === "index" ? "page" : undefined}>教学平台首页 <span>↗</span></a>
          {groups.map(group => <details class="archive-nav-group" open={group.items.some(([id]) => id === slug) || (slug === "index" && group.title === "教学平台 · 从这里开始")}>
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
