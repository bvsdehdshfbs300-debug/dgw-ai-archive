---
title: MaixCAM｜模型训练与二维追踪
description: 从自己的训练图片，到目标坐标与云台动作的完整应用路径。
date: 2026-11-09
modified: 2026-11-09
tags:
  - 更多作品
  - 视觉与运动控制
publish: true
---

<div class="case-intro"><span class="case-kicker">地瓜丸的工作室 · 其他项目</span><p class="case-lead">从自己的训练图片，到目标坐标与云台动作的完整应用路径。</p><div class="case-tags"><span>MaixCAM Pro</span><span>MaixHub</span><span>YOLOv5</span><span>MaixPy</span><span>UDP</span><span>Python PID</span></div></div><aside class="project-stage"><strong>这件作品进行到哪里</strong>模型示例、识别端与 PC GUI、部署文档已整理；性能未在本轮重测</aside>



<figure class="case-figure"><a class="case-image-link" href="assets/projects/maixcam-tracking.svg"><picture><source media="(max-width:600px)" srcset="assets/projects/maixcam-tracking-mobile.svg" width="460" height="1000"><img src="assets/projects/maixcam-tracking.svg" alt="MaixCAM｜模型训练与二维追踪的数据与功能路径" width="1100" height="560" loading="lazy" decoding="async"></picture></a><figcaption>依据项目资料整理的功能关系示意；实际阶段见正文。<span>点击查看大图 ↗</span></figcaption></figure>

## 训练模型之后，继续让它参与控制

这个项目把自定义目标识别与二维云台连接起来。当前示例使用玩偶作为目标：MaixCAM Pro 检测目标，电脑接收偏离画面中心的坐标，计算控制动作，再通过 ESP32-S3 驱动双轴机构。目标是让识别结果真正进入反馈链路，而非只在屏幕上显示一个框。

## 训练链与运行链分别准备

训练流程包括相机采图、建立数据集、目标框标注、MaixHub 训练及模型部署。运行时由 MaixPy 加载 YOLOv5 模型，计算目标中心与画面中心的偏差，经 UDP 发送到电脑。电脑 GUI 呈现坐标与控制状态，PID 将误差转为运动命令，再由主控输出电机脉冲。

## 数据与控制需要共同调试

数据集不能只有同一背景和单一距离，否则演示时很容易丢失目标。运行链也需要统一坐标方向、目标选择、死区和速度参数。看到框不代表命令已执行，电机能转也不代表追踪稳定；各环节应先独立确认，再组合成闭环，避免同时更改模型阈值与控制增益后无法解释结果。

## 先观察命令，再启用动作

现有部署文档保留 dry-run 流程：先只接收坐标、查看命令和轨迹，确认目标与符号正确后再启用执行。开源整理包以 MaixCAM 端和 PC GUI 为主，ESP32-S3 必须使用匹配协议的固件。训练模型文件、识别程序、GUI 与固件版本之间需要明确对应。

## 当前作品能展示的能力

已有模型示例与中文资料贯穿采图、训练、识别和追踪，可以展示视觉应用的完整工程顺序。本页不把示例模型推广成所有物体都能可靠识别，也不虚构检测率、帧率或跟踪误差。下一步改进应从实际丢失场景、控制振荡和部署条件出发。

## 继续阅读

[[projects|更多作品]] · [[platform|地瓜丸的 FPGA 教学平台]] · [[contact|去找地瓜丸→]]

