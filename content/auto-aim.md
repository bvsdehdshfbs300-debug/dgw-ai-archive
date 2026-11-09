---
title: 电赛实践｜简易自行瞄准装置
description: 从识别目标，到把视觉误差变成云台动作。
date: 2026-11-09
modified: 2026-11-09
tags:
  - 更多作品
  - 视觉与运动控制
publish: true
---

<div class="case-intro"><span class="case-kicker">地瓜丸的工作室 · 其他项目</span><p class="case-lead">从识别目标，到把视觉误差变成云台动作。</p><div class="case-tags"><span>嵌入式视觉</span><span>Python</span><span>矩形识别</span><span>透视映射</span><span>PID</span><span>脉冲控制</span></div></div><aside class="project-stage"><strong>这件作品进行到哪里</strong>2025 电赛 E 题相关工程与迭代材料；本页未重新复验整机指标</aside>



<figure class="case-figure"><a class="case-image-link" href="assets/projects/auto-aim.svg"><picture><source media="(max-width:600px)" srcset="assets/projects/auto-aim-mobile.svg" width="460" height="1000"><img src="assets/projects/auto-aim.svg" alt="电赛实践｜简易自行瞄准装置的数据与功能路径" width="1100" height="560" loading="lazy" decoding="async"></picture></a><figcaption>依据项目资料整理的功能关系示意；实际阶段见正文。<span>点击查看大图 ↗</span></figcaption></figure>

## 识别到目标之后，还要让机构跟得上

简易自行瞄准装置围绕视觉识别、目标位置与双轴机构控制展开。真正的问题并不止于画出识别框：图像中计算出的中心，需要转换成机构能执行的动作；目标丢失、识别抖动和机械响应也会影响下一次观察。

## 一条可以逐段检查的闭环

本地工程围绕矩形检测、角点排序、中心定位、透视映射和 PID 调整进行了多轮迭代，包含目标遍历、回中与参数界面。视觉侧先从画面提取目标几何关系，再计算相对参考位置的偏差，控制侧将偏差转成两轴运动。云台动作改变相机或指向位置，新的图像继续进入下一轮处理。

## 对“识别更准”的具体理解

矩形边缘不完整、角点顺序颠倒、视角变化和噪声都可能让中心跳变。因此，工程把角点、有效矩形判断和坐标映射作为独立环节处理；控制端还要考虑死区、限速和增益，避免把图像中的小抖动放大成机构持续摆动。识别与控制需要共同调试，不能只优化其中一个数字。

## 调试材料留下了什么

已有正式题目、多个识别与遍历版本以及界面程序，可用于追踪方案怎样从基础检测走向更完整的控制流程。当前公开页介绍这些技术关系与工程取舍，不把文件名中的“最终”“高精度”当成独立性能证明，也不据目录推断具体奖项或比赛结果。

## 与后续云台项目的联系

这段实践把我关注的对象从单段算法推进到完整链路：输入能不能稳定解释、命令是否正确执行、动作之后是否回到目标。后来鼠标云台与 MaixCAM 追踪项目继续沿用这种分段联调方式；具体精度与速度仍应由对应装置的实测记录说明。

## 继续阅读

[[projects|更多作品]] · [[platform|地瓜丸的 FPGA 教学平台]] · [[contact|去找地瓜丸→]]

