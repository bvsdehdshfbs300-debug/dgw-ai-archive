---
title: 我的 FPGA 教学平台
description: 把代码、约束、波形与硬件观察放进一次完整练习。
date: 2026-11-07
modified: 2026-11-08
tags:
  - 代表作品
  - 产品与教学
publish: true
---

<div class="case-intro"><span class="case-kicker">CASE 01 · 在线教学产品</span><p class="case-lead">让初学者在一次练习里，<br>把代码和电路现象对起来。</p><p>从写 Verilog、连接引脚，到运行、观察和修改，学习者可以在浏览器里走完一轮练习，再用波形和板卡手册解释眼前的结果。</p><div class="case-facts"><div><strong>31 关 / 8 章</strong><span>截至 2026.11 的公开课程</span></div><div><strong>4.1</strong><span>外设实验与逐针手册</span></div><div><strong>免费在线</strong><span>持续根据反馈迭代</span></div></div></div>

<figure class="case-figure "><a class="case-image-link" href="assets/hardware.png"><img src="assets/hardware.png" alt="FPGA 教学平台外设桌面与逐针手册的真实截图" loading="lazy" decoding="async"></a><figcaption>4.1 功能截图：外设桌面与逐针手册一起呈现。<span>点击查看大图 ↗</span></figcaption></figure>

<div class="archive-actions"><a href="https://dgwfpga.cn/practice/">进入练习平台 ↗</a><a href="https://dgwfpga.cn/">打开产品首页 ↗</a></div>

## 一次练习怎样完成

<ol class="case-flow"><li><span>01</span><strong>理解任务</strong><p>先知道目标现象和接口要求。</p></li><li><span>02</span><strong>编写与接线</strong><p>修改 Verilog，填写 XDC 或图形连线。</p></li><li><span>03</span><strong>运行与观察</strong><p>查看检查结果、波形和板卡反馈。</p></li><li><span>04</span><strong>定位与重试</strong><p>根据现象修改，再运行验证。</p></li></ol>

<figure class="case-figure "><a class="case-image-link" href="assets/cases/platform-workspace.png"><img src="assets/cases/platform-workspace.png" alt="练习编辑器、板卡和运行入口的真实界面" loading="lazy" decoding="async"></a><figcaption>练习界面存档：编辑器中的 TODO 是学员待填写模板；这张截图展示布局，未展示已通过的运行结果。<span>点击查看大图 ↗</span></figcaption></figure>

## 我怎样推进这个产品

<div class="role-grid"><section><span>我推进的工作</span><p>确定教学方向和交互要求；检查预览；根据学员反馈选择下一项改动，并决定何时上线。</p></section><section><span>AI 辅助的工作</span><p>协助页面与关卡实现、测试脚本、部署操作和更新文档；实现结果经过预览与验收。</p></section><section><span>工程基础与协作</span><p>使用开源网页与数字逻辑工具构建；课程与界面在持续反馈中迭代。</p></section></div>

## 三次具体的设计取舍

<div class="decision-grid"><section><span>01 / 观察</span><h3>密集波形看不清</h3><p>长时间窗口里，时钟跳变会挤成一片。波形台增加测量、跳变定位与局部精细查看，让学习者能进入具体时间段。</p><a href="waveform.html">查看波形设计 →</a></section><section><span>02 / 接线</span><h3>元件和手册要对应</h3><p>板上排针、接线终点与手册采用一致编号，查元件时能继续查到每一针，减少在多个页面间来回寻找。</p><a href="hardware.html">查看硬件与手册 →</a></section><section><span>03 / 阅读</span><h3>小屏幕也要能查资料</h3><p>手册目录和正文分别滚动，长文本换行，调整暗色背景下的文字对比度；代码、控制台等区域也提供更大的查看空间。</p><a href="interaction.html">查看交互改动 →</a></section></div>

<div class="case-split"><div><h3>从功能存在，到功能能被找到</h3><p>我反复检查的不是页面里放了多少功能，而是学习者在需要时能否找到、看清并使用它。手机手册与桌面界面的阅读方式因此分别处理。</p><p>这些调整同时连接教学设计、界面设计与反馈处理。</p></div><figure class="case-figure portrait"><a class="case-image-link" href="assets/cases/platform-manual-mobile.png"><img src="assets/cases/platform-manual-mobile.png" alt="4.1 板卡手册手机界面" loading="lazy" decoding="async"></a><figcaption>手机手册真实截图；与桌面采用不同的阅读布局。<span>点击查看大图 ↗</span></figcaption></figure></div>

## 结果与当前阶段

- 平台已公开提供从数字逻辑基础到高速数据流、ADC / DAC / SPI / GPIO / PCIe 的练习路径。
- 代码、约束、波形、三维教具和手册放在同一套练习流程中。
- 网页中的板卡用于学习与观察；实体硬件的电气、时序和板级验证有单独的工作。

<aside class="mascot-note"><img src="assets/mascot.png" alt="地瓜丸吉祥物" width="64" height="64" loading="lazy"><div><strong>这件作品对应的能力</strong><p>把学习目标转成产品流程，再用预览、学员反馈和验证推动改进。可以沿右侧能力入口，继续看其他案例。</p></div></aside>

## 继续阅读

[[skills|能力与作品证据]] · [[maintenance|网站如何持续运行]] · [[tide-composer|潮汐作曲家：另一个 FPGA 实物项目]]
