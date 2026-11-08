---
title: 潮汐作曲家：FPGA 海洋音画系统
description: 从实物音画展示到实时缩放、固化和回读验证。
date: 2026-11-07
modified: 2026-11-08
tags:
  - 代表作品
  - FPGA实践
publish: true
---

<div class="case-intro"><span class="case-kicker">CASE 02 · FPGA 实物作品</span><p class="case-lead">四幅海岸，五首音乐，<br>在 FPGA 上实时组织音画。</p><p>面向海洋展馆的音画展示作品。TF 卡提供图像与音乐，FPGA 完成图像缓存、转场、菜单和实时缩放，经 HDMI 输出画面与声音。</p><div class="case-facts"><div><strong>640 × 480 / 60 Hz</strong><span>HDMI 输出模式</span></div><div><strong>1× / 2×</strong><span>板端实时中心缩放</span></div><div><strong>4 图 / 5 曲</strong><span>可替换的 TF 卡素材</span></div></div></div>

<figure class="case-figure "><a class="case-image-link" href="assets/cases/tide-system.png"><img src="assets/cases/tide-system.png" alt="潮汐作曲家在显示器与 FPGA 开发板上运行的实物照片" loading="lazy" decoding="async"></a><figcaption>真实拍摄的“暮港”场景：显示器、开发板与连接线同框，可看到板端输出的画面。<span>点击查看大图 ↗</span></figcaption></figure>

## 从素材到屏幕

<ol class="case-flow"><li><span>01</span><strong>TF 卡素材</strong><p>读取四幅场景与五首音乐。</p></li><li><span>02</span><strong>图像缓存</strong><p>图像预载至 SDRAM，显示侧读取。</p></li><li><span>03</span><strong>板端处理</strong><p>缩放读地址、转场遮罩、OSD 与画面调节。</p></li><li><span>04</span><strong>HDMI 输出</strong><p>画面、音乐、潮汐动效与 LED 反馈。</p></li></ol>

## 我参与和推进的部分

<div class="role-grid"><section><span>我推进的工作</span><p>推进功能目标与效果取舍；查看画面和板端反馈，围绕缩放、转场、颜色和可操作性迭代。</p></section><section><span>AI 辅助的工作</span><p>协助 RTL 与构建脚本修改、仿真回归、固化流程和作品材料整理。</p></section><section><span>工程基础与协作</span><p>作品以“奶蛙大队”参赛；基于官方 TF、HDMI、I2S 等示例继续开发。这里按个人参与过程介绍。</p></section></div>

## 一个关键改动：从预制放大图到实时缩放

<div class="comparison-grid"><section><span>早期做法</span><h3>素材卡多准备一张放大图</h3><p>放大效果跟着图片文件走，换场景还要准备对应素材。</p></section><section><span>最后采用</span><h3>显示时改变 SDRAM 读地址</h3><p>截取原图中央 320 × 240 区域，把每个源像素横向、纵向各读两次，输出 640 × 480。四幅原图共用这一套处理。</p></section></div>

缩放状态在转场全遮挡阶段提交，避免切换中间画面暴露。开启 2 倍缩放后，仍可继续手动切图和自动轮播。

<aside class="mascot-note"><img src="assets/mascot.png" alt="地瓜丸吉祥物" width="64" height="64" loading="lazy"><div><strong>这项改动解决了什么</strong><p>素材卡只保存原图，放大由硬件实时完成。功能变化同时涉及图像地址、场景状态和转场时机，需要一起验证。</p></div></aside>

## 实物与交互

<div class="case-split"><div><h3>把工程做成可以操作的展陈</h3><p>在按键菜单里切换图片、音乐和转场，调整亮度与对比度；画面参数平滑变化。无操作一段时间后降低亮度。</p><p>音频样本同时参与声音输出、潮汐动效与 LED 联动，使观察者能把画面和声音联系起来。</p><div class="case-tags"><span>OSD 菜单</span><span>六种转场</span><span>音画联动</span><span>上电启动</span></div></div><figure class="case-figure portrait"><a class="case-image-link" href="assets/cases/tide-board.jpg"><img src="assets/cases/tide-board.jpg" alt="HX4S20C FPGA 开发板的真实照片" loading="lazy" decoding="async"></a><figcaption>作品使用的开发板实拍，图中可见按键、指示灯和 HDMI 接口。<span>点击查看大图 ↗</span></figcaption></figure></div>

## 我如何检查结果

<div class="evidence-grid"><section><span>行为层</span><h3>RTL 回归</h3><p>检查四图缩放控制、轮播、转场、亮度／对比度及待机行为；地址级仿真逐点检查源坐标映射。</p></section><section><span>实现层</span><h3>构建与时序报告</h3><p>最终构建记录的 Setup WNS 为 +0.830 ns，Hold WNS 为 +0.003 ns。它们说明该次工具时序分析结果。</p></section><section><span>部署层</span><h3>写入后再读回来</h3><p>位流已写入 SPI Flash 并回读校验；TF 卡镜像写入后回读哈希与源镜像一致，保留对应日志。</p></section></div>

## 当前阶段

已整理实物演示、代码包、技术报告和海报；本页公开实物图片与经过核对的结果。运行照片证明对应画面能够输出，构建报告和回读记录分别说明实现与写入结果；长期稳定性等指标需要专门测量。

## 继续阅读

[[skills|能力与作品证据]] · [[platform|把 FPGA 知识做成在线练习]] · [[workflow|从想法到上线的工作流]]
