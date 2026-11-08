---
title: 个人网站的维护实践
description: 从本机服务、微信通知到云部署，记录具体问题与处理过程。
date: 2026-11-07
modified: 2026-11-08
tags:
  - 问题与迭代
  - 网站维护
publish: true
---

<div class="case-intro"><span class="case-kicker">CASE 03 · 产品维护与故障排查</span><p class="case-lead">网站上线之后，<br>把“打不开”追到具体环节。</p><p>这个平台先在个人电脑上运行，再提供外网访问，后来迁移到云服务器。维护过程包括发现故障、通知、软件拉起、备份与发布后的验证。</p><div class="case-facts"><div><strong>本机 → 云端</strong><span>随使用需求调整部署方式</span></div><div><strong>发现 → 处理 → 复查</strong><span>把恢复结果重新验证</span></div><div><strong>备份 → 更新 → 验收</strong><span>每次变更有可追溯记录</span></div></div></div>

<figure class="case-figure "><a class="case-image-link" href="assets/hardware.png"><img src="assets/hardware.png" alt="正在维护的 FPGA 教学产品实际功能截图" loading="lazy" decoding="async"></a><figcaption>维护对象是一个持续迭代的在线教学产品，包含练习、波形、外设和资料查阅。<span>点击查看大图 ↗</span></figcaption></figure>

## 网站怎样提供一次练习

<ol class="case-flow"><li><span>01</span><strong>浏览器访问</strong><p>加载页面与必要资源。</p></li><li><span>02</span><strong>网站入口</strong><p>把页面请求与 API 请求送到对应服务。</p></li><li><span>03</span><strong>练习服务</strong><p>接收任务，运行仿真并整理结果。</p></li><li><span>04</span><strong>回到页面</strong><p>显示结果和波形，供学习者继续分析。</p></li></ol>

把这条路径拆开之后，“主页能打开”和“练习能运行”就成为两个可以分别检查的问题。处理故障时先找出失败环节，再决定重启、修复还是回退。

## 我推进的维护工作

<div class="role-grid"><section><span>我推进的工作</span><p>提出微信通知、自动拉起和简要回执的需求；反馈弹窗干扰与跨网络访问问题；选择云部署并审查更新结果。</p></section><section><span>AI 辅助的工作</span><p>协助监控与启动脚本、后台启动方式、部署配置、日志检查和维护教程实现。</p></section><section><span>工程基础与协作</span><p>监测、通知、本机脚本和云端服务承担不同工作；每次检查保留范围与结果，避免把一次启动当成全部恢复。</p></section></div>

## 三个真实问题，三种处理方式

### 01　有些地区打开很慢，其他设备却流畅

**现象：** 学习者反馈不同省份、网络和设备上的表现不同，部分电脑长时间加载。

**判断：** 先检查域名、页面资源、接口和运行任务是否分别可达，再对照设备负载。只在站主的网络里打开一次，无法说明其他人的访问体验。

**处理：** 调整页面与交互负担，并从本机外网方案迁移到云端部署。后续仍需跨网络复测；本页不以单点结果推断全国速度。

### 02　启动脚本执行了，练习服务却没准备好

**现象：** 早期公网启动过程出现本地网关等待超时。构建结束不代表页面入口和练习 API 都已经就绪。

**处理：** 分别检查构建、API、网关和外网入口。软件拉起后重新探测，再发送简要结果，保留失败环节和日志供继续定位。

<figure class="case-figure "><a class="case-image-link" href="assets/cases/maintenance-launcher.png"><img src="assets/cases/maintenance-launcher.png" alt="早期本机公网网站启动终端的历史截图" loading="lazy" decoding="async"></a><figcaption>历史存档：本机做服务器时期的成功启动界面。它用于解释当时的启动链路，不代表当前云端的运行方式。<span>点击查看大图 ↗</span></figcaption></figure>

### 03　监控在运行，黑色窗口却总是一闪而过

**现象：** 定时任务直接启动 PowerShell，即使设置隐藏，也可能先创建控制台窗口再隐藏，影响日常使用。

<div class="comparison-grid"><section><span>原来的启动方式</span><h3>任务直接创建控制台</h3><p>窗口可能在隐藏参数生效前出现；重复检查时，闪窗会反复打扰使用者。</p></section><section><span>采用的处理</span><h3>由无窗口宿主启动检查</h3><p>改为通过 WScript 的隐藏启动方式调用原检查，并等待检查结束，保留任务防重入设置。</p></section></div>

**复查：** 核对任务入口，手动触发后检查返回状态和新的日志记录。原有检测与通知逻辑继续保留。

<aside class="mascot-note"><img src="assets/mascot.png" alt="地瓜丸吉祥物" width="64" height="64" loading="lazy"><div><strong>维护也包含使用体验</strong><p>检查能工作还不够：它不应每分钟打断使用者。修复启动方式时，也要保留防重入与日志，方便继续排查。</p></div></aside>

## 微信通知与自动恢复的边界

<div class="case-split"><div><h3>收到消息后，知道下一步看哪里</h3><p>本机服务阶段曾接入微信通知和自动拉起；发现问题后尝试恢复软件服务，再返回简要结果。</p><p>这张通知是“自动修复已启用”的历史确认，不能单独证明某次故障已修好。设备断电或本机断网时，本机脚本要等待设备恢复才能执行。</p><p><strong>当前状态：</strong>正式站已迁移云服务器，旧本机 Tunnel 和自动修复计划任务保持停用；云端服务配置有进程异常重启和数据库备份。</p></div><figure class="case-figure notification"><a class="case-image-link" href="assets/cases/maintenance-wechat.png"><img src="assets/cases/maintenance-wechat.png" alt="2026年10月18日微信收到自动修复启用确认" loading="lazy" decoding="async"></a><figcaption>2026-10-18 的本机阶段启用确认；不是故障恢复回执。<span>点击查看大图 ↗</span></figcaption></figure></div>

## 更新怎样留下可复查的记录

<ol class="case-flow"><li><span>01</span><strong>备份</strong><p>保存本次改动会影响的文件与版本。</p></li><li><span>02</span><strong>修改</strong><p>先在独立范围处理问题，保留旧记录。</p></li><li><span>03</span><strong>验收</strong><p>构建、入口、实际交互与手机布局分别检查。</p></li><li><span>04</span><strong>发布</strong><p>记录版本和结果；有问题按范围回退。</p></li></ol>

## 这段经历体现的能力

- 把用户的模糊反馈转成可分别核对的网络、页面与服务问题。
- 根据个人维护成本和访问需求，调整部署方式。
- 关注启动、防重入、通知、恢复确认和可回退的更新过程。
- 把处理过程整理为教程与交接记录，让后续工作能接着做。

## 继续阅读

[[skills|能力与作品证据]] · [[debugging|从反馈定位问题]] · [[workflow|从想法到上线]] · [[platform|教学平台案例]]
