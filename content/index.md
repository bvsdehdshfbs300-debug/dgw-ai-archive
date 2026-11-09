---
title: 地瓜丸的 FPGA 教学平台
description: 免费在线 FPGA 教学平台：写代码、接约束、看波形、转动 3D 板卡。
date: 2026-11-07
modified: 2026-11-09
tags:
  - 产品与教学
publish: true
---

<section class="product-hero"><div><span class="product-kicker">地瓜丸 · 个人工作室 / FREE ONLINE FPGA LAB</span><h2>想象力，<br>遇上能运行的电路。</h2><p class="product-deck">从第一颗 LED，到显示、数据流与外设。<br>在浏览器里写 Verilog，让代码、波形和硬件现象对上。</p><div class="product-actions"><a href="https://dgwfpga.cn/practice/">免费开始练习 ↗</a><a href="platform.html">先看平台能做什么 →</a></div><div class="product-specs"><span><b>31</b> 个公开关卡</span><span><b>8</b> 个学习章节</span><span><b>4.1</b> 外设实验室</span></div></div><a class="hero-image" href="platform.html"><img src="assets/hardware.png" alt="地瓜丸 FPGA 教学平台真实 3D 硬件桌面与逐针手册" width="1440" height="900"><span>真实功能界面 · 完整硬件与逐针手册</span></a><img class="hero-mascot" src="assets/mascot/mascot-explaining.png" alt="拿着波形卡片的地瓜丸吉祥物" width="150" height="150"></section>

## 一次练习，走完从想法到现象

<div class="learning-loop"><div><em>01</em><h3>理解目标</h3><p>先知道这一关要发生什么，哪些信号值得观察。</p></div><div><em>02</em><h3>编写与连接</h3><p>编辑代码，手写 XDC，或者把端口连到具体针脚。</p></div><div><em>03</em><h3>运行并观察</h3><p>将运行反馈、波形与 LED、显示屏一起对照。</p></div><div><em>04</em><h3>定位再重试</h3><p>找到行为不符的时间点，修改后再检验一次。</p></div></div>

## 功能不是一句话，展开看实际操作

<details class="feature-story" open><summary><span>01 / 动手写</span><strong>代码、约束与一次运行</strong><b>展开演示 ＋</b></summary><div class="feature-story-body"><p>先读任务，再写 Verilog；编辑器、约束、运行反馈和观察窗口连在一起。每次修改后都可以重新运行，沿着信号与检查结果继续定位，而不是只猜语法有没有写对。</p><figure class="case-figure "><a class="case-image-link" href="assets/cases/platform-workspace.png"><img src="assets/cases/platform-workspace.png" alt="代码、约束与一次运行" width="1600" height="1000" loading="lazy" decoding="async"></a><figcaption>一个学习目标，放在同一张工作台上。<span>点击看大图 ↗</span></figcaption></figure></div></details>
<details class="feature-story"><summary><span>02 / 接得上</span><strong>点选连线，约束跟着落下</strong><b>展开演示 ＋</b></summary><div class="feature-story-body"><p>代码里的端口不是凭空存在的。图形连线将端口、板上针脚和 XDC 联系起来；接线后还要查看自动填写的约束。手写和图形方式都留在练习里，方便理解二者对应关系。</p><figure class="case-figure "><a class="case-image-link" href="assets/showcase/constraint-wiring.gif"><img src="assets/showcase/constraint-wiring.gif" alt="点选连线，约束跟着落下" width="850" height="766" loading="lazy" decoding="async"></a><figcaption>真实操作录屏：端口连接到针脚，约束随之填写。<span>点击看大图 ↗</span></figcaption></figure></div></details>
<details class="feature-story"><summary><span>03 / 看得清</span><strong>沿波形找到问题发生的那一拍</strong><b>展开演示 ＋</b></summary><div class="feature-story-body"><p>从长时间窗口定位密集活动，再进入局部细节。平移、缩放、跳变定位、双游标测量与进制切换各有用途：先确认要观察的问题，再选择能解释它的工具。</p><figure class="case-figure "><a class="case-image-link" href="assets/notes/waveform.gif"><img src="assets/notes/waveform.gif" alt="沿波形找到问题发生的那一拍" width="900" height="498" loading="lazy" decoding="async"></a><figcaption>真实操作录屏：时间窗口、信号和游标位置。<span>点击看大图 ↗</span></figcaption></figure></div></details>
<details class="feature-story"><summary><span>04 / 有现象</span><strong>LED 与屏幕，让结果看得见</strong><b>展开演示 ＋</b></summary><div class="feature-story-body"><p>灯为什么亮、什么时候翻转，需要和代码里的计数、状态及输出电平一起看。教学桌面让波形中的变化有直观反馈；显示关卡还可以把行场时序还原成一帧画面。</p><figure class="case-figure "><a class="case-image-link" href="assets/notes/led-feedback.gif"><img src="assets/notes/led-feedback.gif" alt="LED 与屏幕，让结果看得见" width="750" height="758" loading="lazy" decoding="async"></a><figcaption>真实操作录屏：波形时间位置与虚拟 LED 对应。<span>点击看大图 ↗</span></figcaption></figure></div></details>
<details class="feature-story"><summary><span>05 / 查得到</span><strong>元件不是摆设，手册紧挨着器件</strong><b>展开演示 ＋</b></summary><div class="feature-story-body"><p>从器件名称到接口，再到针号、方向和对端，资料应能顺着问题找到。完整硬件桌面覆盖所有关卡，逐针手册帮助学习者核对连线，而不是在好几个文档之间来回找。</p><figure class="case-figure "><a class="case-image-link" href="assets/showcase/board-manual.gif"><img src="assets/showcase/board-manual.gif" alt="元件不是摆设，手册紧挨着器件" width="900" height="574" loading="lazy" decoding="async"></a><figcaption>真实操作录屏：点击板上元件，继续查资料。<span>点击看大图 ↗</span></figcaption></figure></div></details>
<details class="feature-story"><summary><span>06 / 往深处走</span><strong>从一颗灯，走到数据流与外设</strong><b>展开演示 ＋</b></summary><div class="feature-story-body"><p>31 个公开关卡分成 8 章，从组合逻辑、时钟计数和状态机，延伸到 UART、I²C、显示、FIFO、网络、高速流及独立外设实验。每关先抓住一个能观察、能判断的关键行为。</p><figure class="case-figure "><a class="case-image-link" href="assets/notes/screen-display.gif"><img src="assets/notes/screen-display.gif" alt="从一颗灯，走到数据流与外设" width="900" height="524" loading="lazy" decoding="async"></a><figcaption>真实显示关卡录屏：彩条、像素位置与时序说明。<span>点击看大图 ↗</span></figcaption></figure></div></details>

<div class="product-actions"><a href="platform.html">查看完整平台介绍 →</a><a href="waveform.html">深入波形台 →</a><a href="hardware.html">硬件与逐针手册 →</a></div>

## 把我们的 3D 板卡，直接放到你面前

<div class="board-exhibit"><img src="assets/hardware.png" alt="地瓜丸 FPGA 教学平台的完整 3D 外设桌面" loading="lazy"><div><span>浏览器里的硬件桌面</span><h3>亲手转一圈，点开每个器件。</h3><p>主板、AD/DA、SPI、GPIO、PCIe 与接口，在同一张桌面上。</p><button type="button" data-load-board="https://dgwfpga.cn/portfolio-media/20261109/board-viewer/">打开交互式 3D 板卡 →</button><small>按需加载 · 拖动旋转 · 元件可点击</small></div></div>

## 用一段完整演示认识它

<figure class="video-feature"><video controls playsinline preload="none" poster="assets/notes/promo-cover.png" aria-label="地瓜丸 FPGA 教学平台 · 实际功能操作演示"><source src="https://dgwfpga.cn/portfolio-media/20261109/videos/fpga-platform.mp4" type="video/mp4"><a href="https://dgwfpga.cn/portfolio-media/20261109/videos/fpga-platform.mp4">打开演示视频</a></video><figcaption>地瓜丸 FPGA 教学平台 · 实际功能操作演示 · 点击播放，支持全屏。<a href="https://dgwfpga.cn/portfolio-media/20261109/videos/fpga-platform.mp4" target="_blank" rel="noopener">单独打开 ↗</a></figcaption></figure>

## 这座实验室里，还有一个小伙伴

<section class="mascot-intro"><img src="assets/mascot/mascot-celebrating.png" alt="举手庆祝的地瓜丸吉祥物" width="200" height="200"><div><span class="product-kicker">MEET OUR MASCOT</span><h3>圆眼镜、小显示器，陪你把电路想明白。</h3><p>它会讲解、会思考，也会在排查故障时拿起扳手。贯穿平台、教程和这个介绍站的小角色，让每次练习都有熟悉的陪伴。</p><a href="mascot.html">认识吉祥物与整套表情 →</a></div></section>

## 围绕平台，继续认识地瓜丸

<div class="home-paths"><a href="about.html"><strong>为什么做这个教学平台</strong><span>我的方向、取舍与持续迭代</span></a><a href="skills.html"><strong>从作品看实践能力</strong><span>教学、FPGA、交互与维护</span></a><a href="projects.html"><strong>工作室的其他项目</strong><span>潮汐作曲家、柔性感知、控制、工具与游戏</span></a><a href="contact.html"><strong>去找地瓜丸→</strong><span>抖音、B站与 FPGA 学习交流群</span></a></div>

<p class="editorial-footnote">平台是这里的主线。其他作品与 AI 协作记录，沿着具体项目继续展开。课程状态整理于 2026-11-09。</p>
