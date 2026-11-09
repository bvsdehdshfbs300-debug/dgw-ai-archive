---
title: 把硬件与手册放在一起
description: 点元件查资料，接线落到具体针脚，避免漂亮却无用的装饰。
modified: 2026-11-09
date: 2026-11-07
tags:
  - 代表作品
publish: true
---

<div class="field-intro"><span class="field-kicker">地瓜丸 · 3D 板卡与逐针手册</span><p class="field-lead">点一下器件，<br>沿着接线找到针脚。</p><p>所有关卡共用完整硬件桌面。4.1 的 ADC、DAC、SPI、GPIO 和 PCIe 外设，也可以在同一张桌面上查看。</p></div><div class="board-exhibit"><img src="assets/hardware.png" alt="完整的 3D 教学硬件桌面" loading="lazy"><div><span>和练习平台相同的硬件模型</span><h3>从主板，到每一块外设。</h3><p>拖动观察、切换视角，再点开元件。先熟悉这张桌面，再回到关卡里让代码与波形接上。</p><button type="button" data-load-board="https://dgwfpga.cn/portfolio-media/20261109/board-viewer/">打开 3D 硬件桌面 →</button></div></div>

## 看接口时，别只看元件名称

<figure class="case-figure field-frame"><a class="case-image-link gallery-full" href="assets/feature-tour/26-pin-manual.webp"><img src="assets/feature-tour/26-pin-manual.webp" alt="40 针接口的实际手册画面：接线关联、定义依据和逐针表在一起。" width="1440" height="900" loading="lazy" decoding="async"></a><figcaption>40 针接口的实际手册画面：接线关联、定义依据和逐针表在一起。<span>点击看原图 ↗</span></figcaption></figure><div class="field-table-wrap"><table class="field-table"><thead><tr><th>查阅位置</th><th>能核对什么</th></tr></thead><tbody><tr><td>接口的两端</td><td>主板扩展座和外设接头是否对应。</td></tr><tr><td>逐针编号</td><td>信号落在哪个针位，奇偶列和方向如何排列。</td></tr><tr><td>信号方向</td><td>输入、输出、供电与地线是否区分清楚。</td></tr><tr><td>接线关联</td><td>沿链接跳到对端，继续核对同一条连接。</td></tr><tr><td>XDC 约束</td><td>代码端口名与图形接线是否落到同一个引脚。</td></tr></tbody></table></div>

## 这套手册怎么改过来的

<div class="field-shot-list"><div><span>接线</span><section><b>先解决“线没落到针上”。</b><br>把主板接口、扩展接头和逐针编号对齐，界面上的每根线有明确去向。</section></div><div><span>目录</span><section><b>再解决横向挤压。</b><br>改为纵向查阅，让接口目录和正文能分别滚动。</section></div><div><span>对比度</span><section><b>深色背景里仍要看清标题。</b><br>调整 ADA107 等说明文字的颜色，并检查手机阅读。</section></div></div>

<nav class="field-read-next" aria-label="继续阅读"><a href="https://dgwfpga.cn/practice/">回到练习操作 →</a><a href="streaming.html">查看五类外设任务 →</a><a href="interaction.html">查看其他界面改动 →</a></nav>
