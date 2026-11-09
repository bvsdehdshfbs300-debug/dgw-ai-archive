---
title: 把硬件与手册放在一起
description: 点元件查资料，接线落到具体针脚，避免漂亮却无用的装饰。
date: 2026-11-07
tags:
  - 代表作品
publish: true
---

三维桌面承担的是教学任务。学习者应能识别器件、理解接线、找到针号，并将这些信息与代码约束联系起来。

## 4.1 的扩展

新增 ADC、DAC、SPI、GPIO、PCIe 五项独立实验，并配合外设观察、接口定位和逐针手册。所有关卡共用完整硬件桌面。

![点击接口查看逐针手册](assets/hardware.png)

## 在介绍页里直接体验硬件

<div class="board-exhibit"><img src="assets/hardware.png" alt="完整的 3D 教学硬件桌面" loading="lazy"><div><span>和练习平台相同的硬件模型</span><h3>从主板，到每一块外设。</h3><p>拖动观察、切换视角，再点开元件。先熟悉这张桌面，再回到关卡里让代码与波形接上。</p><button type="button" data-load-board="https://dgwfpga.cn/portfolio-media/20261109/board-viewer/">打开 3D 硬件桌面 →</button></div></div>

## 接线要有去向

“连线看着像接上了”不能替代实际对应关系。界面应能查到针位、方向、供电和对端。参考资料与平台定义也要能自洽。

## 阅读体验同样重要

手册后来根据反馈调整为纵向目录、清晰的正文滚动和明确的深色文字对比度。电脑与手机都应能查阅，而不是只在设计者的大屏上可用。

## 继续探索

- [[platform|我的 FPGA 教学平台]]
- [[interaction|让信息看得清、找得到]]
- [[debugging|从反馈里找到真正的问题]]
- [[fpga|FPGA 与数字逻辑]]

[[index|回到档案首页]]
