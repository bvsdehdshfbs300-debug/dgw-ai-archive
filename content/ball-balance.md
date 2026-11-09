---
title: 车载平衡滚球｜视觉与运动控制
description: 三段实拍和整机照片，配合视觉、控制与机械调试过程介绍车载滚球系统。
date: 2026-11-09
modified: 2026-11-09
tags:
  - 更多作品
  - 视觉与运动控制
publish: true
---

<div class="field-intro"><span class="field-kicker">地瓜丸 · 车载平衡滚球</span><p class="field-lead">先把装置摆出来，<br>再看球怎么动。</p><p>相机架在车体上方，杆上承载钢球，执行机构调整杆的倾角。这里放三段实拍：先认清结构，再看底盘运行和杆上的球。</p></div><dl class="field-facts"><div><dt>实拍素材</dt><dd>3 段视频 + 整机照片</dd></div><div><dt>视觉端</dt><dd>MaixCAM2 / YOLOv5</dd></div><div><dt>控制端</dt><dd>ESP32-S3 / 闭环步进</dd></div></dl>
<figure class="field-photo"><div class="photo-map"><a class="case-image-link gallery-full" href="assets/project-field/ball-system.webp"><img src="assets/project-field/ball-system.webp" alt="车载平衡滚球装置的相机立柱、轨道和底盘" width="1600" height="1200" loading="lazy"></a><span class="photo-pin" style="left:59%;top:6%">1</span><span class="photo-pin" style="left:45%;top:47%">2</span><span class="photo-pin" style="left:48%;top:68%">3</span></div><figcaption>调试现场的整机照片。点击原图可以查看相机、机构和接线。</figcaption><div class="photo-legend"><span><b>1 / 视觉位置</b>相机固定在立柱上方。</span><span><b>2 / 杆与机构</b>球在杆上运动，倾角决定它受力的方向。</span><span><b>3 / 车体与供电</b>控制板、电池和线束集中在底盘。</span></div></figure>

## 三段实拍，分别看三个问题

<figure class="field-media"><video controls playsinline preload="none" poster="assets/project-field/ball-on-rail.webp" width="1280" height="720"><source src="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/ball-on-rail.mp4" type="video/mp4">当前浏览器无法播放，可<a href="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/ball-on-rail.mp4">直接打开视频</a>。</video><figcaption><span>00:22 / 实拍原片</span><strong>杆上的球怎样响应</strong>镜头朝向杆面，保留现场操作。可以反复拖动进度条，观察球的位置和杆的变化。</figcaption></figure><div class="field-clip-pair"><figure class="field-media portrait"><video controls playsinline preload="none" poster="assets/project-field/ball-mechanism.webp" width="720" height="1280"><source src="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/ball-mechanism.mp4" type="video/mp4">当前浏览器无法播放，可<a href="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/ball-mechanism.mp4">直接打开视频</a>。</video><figcaption><span>00:08 / 实拍原片</span><strong>机构近景</strong>从较近的位置看导轨、连杆、执行机构和接线。</figcaption></figure><figure class="field-media portrait"><video controls playsinline preload="none" poster="assets/project-field/ball-track.webp" width="720" height="1280"><source src="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/ball-track.mp4" type="video/mp4">当前浏览器无法播放，可<a href="https://dgwfpga.cn/portfolio-media/20261109/videos/projects/ball-track.mp4">直接打开视频</a>。</video><figcaption><span>00:09 / 实拍原片</span><strong>车体沿线运行</strong>看底盘在地面标线上运动。这段主要展示车体，杆上平衡另看上方视频。</figcaption></figure></div>

## 球的位置，怎样变成杆的动作

<ol class="field-path"><li><b>相机找球</b>识别球与目标位置，整理有效坐标。</li><li><b>传输坐标</b>视觉端通过 UDP 将位置发给控制端。</li><li><b>计算控制量</b>ESP32-S3 估计速度，按误差和状态计算倾角。</li><li><b>机构执行</b>经 UART 控制闭环步进机构，改变杆的倾角。</li></ol>
<div class="field-note">球已经靠近目标，还可能因为惯性继续滚动。控制里同时考虑位置与速度；机械水平偏置、摩擦和通信延迟也会影响表现。</div>

## 调试里真正费时间的地方

<div class="field-table-wrap"><table class="field-table"><thead><tr><th>现场问题</th><th>工程里的处理</th><th>调试时对照</th></tr></thead><tbody><tr><td>接近目标，球却不动</td><td>静摩擦补偿、积分助推。</td><td>球的位置、输出角度和当前模式。</td></tr><tr><td>动作结束后仍有固定偏差</td><td>用 trim 处理平衡偏置，与快速控制量分开。</td><td>保持阶段的误差和补偿变化。</td></tr><tr><td>补偿越调越大</td><td>修正 trim 学习混入瞬态控制量的问题。</td><td>误差是否收敛，补偿是否持续累积。</td></tr><tr><td>丢球或收不到新坐标</td><td>限制输出和变化率，超时进入回平策略。</td><td>目标有效性、通信状态和输出角度。</td></tr></tbody></table></div><details class="field-detail"><summary>展开看视觉端与控制端的分工</summary><div>视觉端处理目标有效性和位置平滑。速度估计放在控制端，控制任务按自己的节拍更新，避免两边重复滤波增加迟滞。</div></details><details class="field-detail"><summary>展开看已有的工程记录</summary><div>项目保留最终及后续工程、控制说明、模型材料和位置 CSV。视频展示当时的装置运行；稳定时间、跟踪精度等指标需要结合原始记录和测试条件单独测量。</div></details><nav class="field-read-next" aria-label="继续阅读"><a href="maixcam-tracking.html">看另一套视觉云台 →</a><a href="projects.html">看其他作品 →</a><a href="platform.html">回到 FPGA 教学平台 →</a></nav>
