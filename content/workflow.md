---
title: 从想法到上线的工作流
description: 把需求、实现、验证与留痕连成一条可以复查的过程。
date: 2026-11-07
modified: 2026-11-09
tags:
  - AI协作
publish: true
---

<div class="field-intro"><span class="field-kicker">地瓜丸 · 项目工作流</span><p class="field-lead">每次修改，<br>留一个下次能接上的起点。</p><p>用这次介绍站的修复举例：用户指出拉伸和 404，随后核对素材、修改页面、检查公网，再保存版本和回退资料。</p></div><figure class="case-figure field-frame"><a class="case-image-link gallery-full" href="assets/feature-tour/02-xdc-auto-fill.webp"><img src="assets/feature-tour/02-xdc-auto-fill.webp" alt="实录素材整理后成为功能截图。原始素材、网页用图和发布版本分别留档。" width="1600" height="900" loading="lazy" decoding="async"></a><figcaption>实录素材整理后成为功能截图。原始素材、网页用图和发布版本分别留档。<span>点击看原图 ↗</span></figcaption></figure>

## 一次修改会留下这些东西

<div class="field-table-wrap"><table class="field-table"><thead><tr><th>阶段</th><th>这次具体做什么</th><th>留下什么</th></tr></thead><tbody><tr><td>明确问题</td><td>核对用户截图中的拉伸、404 和配图不足。</td><td>原始反馈与修改范围。</td></tr><tr><td>准备可查看结果</td><td>替换首图，整理不同功能截图，做主题筛选。</td><td>页面预览、审查后的素材和来源索引。</td></tr><tr><td>检查原操作</td><td>窄屏比例、点击大图、筛选、真实公网链接。</td><td>浏览器截图与检查报告。</td></tr><tr><td>发布与留档</td><td>同步国内镜像与公开分支，检查上线内容。</td><td>发布提交、交付说明及前后备份。</td></tr></tbody></table></div>

## 检查范围跟着改动走

<ul class="field-review-list"><li><b>文案与图片：</b>看来源、链接、比例和手机阅读。</li><li><b>界面交互：</b>重复实际点击、展开、关闭和滚动。</li><li><b>判题与关卡：</b>检查参考实现、错误实现和相关运行链路。</li><li><b>部署：</b>检查真实入口与关键接口，保留可回退的配置和版本。</li></ul>

<nav class="field-read-next" aria-label="继续阅读"><a href="ai-collaboration.html">查看人和 AI 的分工 →</a><a href="maintenance.html">查看维护实践 →</a><a href="timeline.html">查看版本记录 →</a></nav>
