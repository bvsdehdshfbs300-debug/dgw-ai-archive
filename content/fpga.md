---
title: FPGA 与数字逻辑
description: 从点亮一颗灯，到理解波形、接口和逐拍行为。
date: 2026-11-07
modified: 2026-11-08
tags:
  - 实践能力
publish: true
---

教学内容需要同时照顾代码与电路直觉。能写出语法，不一定能解释一个输出为什么在这个时刻变化。

<!-- note-visuals-20261108 -->

<figure class="case-figure note-visual "><a class="case-image-link" href="assets/notes/led-feedback.gif"><img src="assets/notes/led-feedback.gif" alt="平台真实操作录屏：LED 与波形时间位置对应" width="750" height="758" loading="lazy" decoding="async"></a><figcaption>真实界面演示：在波形里改变时间位置，观察虚拟板卡上的 LED 反馈。<span>点击查看大图 ↗</span></figcaption></figure>

<figure class="case-figure note-visual "><a class="case-image-link" href="assets/notes/screen-display.gif"><img src="assets/notes/screen-display.gif" alt="显示时序关卡的彩条输出和像素说明" width="900" height="524" loading="lazy" decoding="async"></a><figcaption>真实界面演示：把显示时序对应到一帧彩条及其像素说明。<span>点击查看大图 ↗</span></figcaption></figure>

## 当前作品中的实践

入门内容覆盖电平、计数、按键消抖、状态机和 PWM；随后进入 UART、I²C、显示时序、FIFO、存储、网络与高速数据流。

## 我重视的观察方式

先提出一个可验证的问题，再看相应信号或器件的变化。代码、约束、波形与显示效果共同构成学习反馈，不能只有一个“通过”标签。

## 继续积累

课程深度需要在实际体验中检验。我会把学习者看不懂的地方、功能边界和课程改动持续记下来，让后续内容有明确依据。

## 继续探索

- [[platform|我的 FPGA 教学平台]]
- [[waveform|把波形真正看清]]
- [[streaming|高速数据流与外设实验]]
- [[skills|我的实践方向]]

[[index|回到档案首页]]
