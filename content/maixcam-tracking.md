---
title: MaixCAM｜自动识别瞄准与二维追踪
description: 4分52秒实拍演示，按章节查看目标识别、坐标反馈、PID控制界面和双轴云台动作。
date: 2026-11-09
modified: 2026-11-09
tags:
  - 更多作品
  - 视觉与运动控制
publish: true
---

<div class="field-intro"><span class="field-kicker">地瓜丸 · MaixCAM 自动识别瞄准</span><p class="field-lead">它认出了目标，<br>云台接下来怎么转？</p><p>我用玩偶作为示例目标，把相机识别、坐标传输、电脑控制界面和双轴机构接起来。下方视频保留了从检测画面到实机动作的过程。</p></div><dl class="field-facts"><div><dt>演示时长</dt><dd>04:52 / 完整原片</dd></div><div><dt>识别工具</dt><dd>MaixCAM Pro / YOLOv5</dd></div><div><dt>控制路径</dt><dd>UDP → PC PID → ESP32-S3</dd></div></dl><figure class="case-figure field-frame"><a class="case-image-link gallery-full" href="assets/project-field/maixcam-demo.webp"><img src="assets/project-field/maixcam-demo.webp" alt="MaixCAM 显示屏与双轴云台实机" width="1280" height="720" loading="lazy" decoding="async"></a><figcaption>视频里的实机近景：相机屏幕显示目标，双轴结构负责调整朝向。<span>点击看原图 ↗</span></figcaption></figure>

## 直接看演示，也可以按章节跳转

<section class="field-video-section">
<figure class="field-media"><video id="maix-walkthrough" controls playsinline preload="none" poster="assets/project-field/maixcam-demo.webp" width="1280" height="720"><source src="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/maixcam-demo.mp4" type="video/mp4">当前浏览器无法播放，可<a href="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/maixcam-demo.mp4">直接打开视频</a>。</video><figcaption><span>04:52 / 实拍原片</span><strong>MaixCAM 自动识别与云台演示</strong>保留完整 4 分 52 秒原片。既能看实机，也能看识别框、坐标日志和 PID 控制界面。</figcaption></figure><div class="field-chapters" role="group" aria-label="视频章节"><button type="button" data-video-seek="0" data-video-target="maix-walkthrough"><span>00:00</span>实机与目标</button><button type="button" data-video-seek="40" data-video-target="maix-walkthrough"><span>00:40</span>连接相机</button><button type="button" data-video-seek="90" data-video-target="maix-walkthrough"><span>01:30</span>识别框与偏差</button><button type="button" data-video-seek="155" data-video-target="maix-walkthrough"><span>02:35</span>坐标与串口指令</button><button type="button" data-video-seek="210" data-video-target="maix-walkthrough"><span>03:30</span>PID 控制界面</button><button type="button" data-video-seek="270" data-video-target="maix-walkthrough"><span>04:30</span>回到实机</button></div><p class="field-chapter-status" aria-live="polite">点击章节，从对应位置播放。</p></section>

## 先看见，再把偏差送出去

<ol class="field-path"><li><b>训练自己的目标</b>采图、标注，在 MaixHub 训练后部署模型。</li><li><b>相机计算偏差</b>MaixPy 加载 YOLOv5，计算目标中心相对画面中心的 dx / dy。</li><li><b>电脑判断动作</b>UDP 接收坐标，GUI 显示状态，PID 生成控制命令。</li><li><b>双轴机构响应</b>经 ESP32-S3 输出电机控制，调整相机朝向。</li></ol>

<div class="field-split">
<figure class="case-figure field-frame"><a class="case-image-link gallery-full" href="assets/project-field/maix-recognition.webp"><img src="assets/project-field/maix-recognition.webp" alt="识别程序和实时目标画面" width="1280" height="720" loading="lazy" decoding="async"></a><figcaption>原片截帧：识别代码、画面中心与目标检测画面。<span>点击看原图 ↗</span></figcaption></figure><div><h3>这个框，只回答“找到了谁”</h3><p>检测结果还要转换为目标中心和画面中心的偏差。接着核对坐标符号、置信度与目标选择，才知道该把哪个方向的命令交给云台。</p><p>画面里的 <code>target lost</code> 表示当前没有满足条件的目标；重新找到目标后再更新状态。</p></div></div>

<div class="field-split">
<figure class="case-figure field-frame"><a class="case-image-link gallery-full" href="assets/project-field/maix-control.webp"><img src="assets/project-field/maix-control.webp" alt="视觉 PID 自动锁定控制界面" width="1280" height="720" loading="lazy" decoding="async"></a><figcaption>原片截帧：目标状态、二维偏差点、PID 参数和安全限制。<span>点击看原图 ↗</span></figcaption></figure><div><h3>在动作前，先把命令看明白</h3><p>控制界面把 dx / dy 画成偏差点，同时显示锁定状态、串口和最近命令。可以先开 dry-run，只看命令；方向和幅度确认后，再启用自动锁定。</p><p>死区、最大步数、最低置信度和发送间隔是联调参数。画面显示的是这次调试的配置，不代表通用最优值。</p></div></div>

## 我怎么区分问题出在哪一段

<div class="field-table-wrap"><table class="field-table"><thead><tr><th>看到的现象</th><th>先检查</th><th>对应工具</th></tr></thead><tbody><tr><td>目标在画面里，但没有框</td><td>模型文件、目标类别、检测阈值。</td><td>相机识别画面。</td></tr><tr><td>有框，电脑没有坐标</td><td>UDP 接收端是否启动、地址与端口是否一致。</td><td>坐标日志与 GUI 目标状态。</td></tr><tr><td>有坐标，云台方向相反</td><td>dx / dy 的符号和轴方向是否匹配。</td><td>dry-run、X / Y 反向设置。</td></tr><tr><td>云台能跟，靠近中心来回摆</td><td>死区、增益、单次步数和发送间隔。</td><td>偏差轨迹、最近命令与实机动作。</td></tr></tbody></table></div><details class="field-detail"><summary>展开看模型训练与部署</summary><div>数据准备要包含不同背景和距离。训练后核对模型文件、识别程序、PC GUI 与主控固件的对应关系，再把识别与动作逐段接起来。</div></details><details class="field-detail"><summary>展开看这个演示的范围</summary><div>原片以玩偶目标展示识别、坐标反馈与双轴控制。它能说明这套系统如何联调；其他目标或不同光照需要重新准备数据与测试。</div></details><nav class="field-read-next" aria-label="继续阅读"><a href="ball-balance.html">看车载滚球实拍 →</a><a href="mouse-gimbal.html">看两版鼠标云台 →</a><a href="projects.html">其他作品 →</a></nav>
