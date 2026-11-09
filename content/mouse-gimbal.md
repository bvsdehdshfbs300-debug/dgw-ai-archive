---
title: 鼠标双轴云台｜ESP32-S3 与 FPGA 两版
description: 同一个鼠标输入，沿两条主控路线驱动双轴机构。
date: 2026-11-09
modified: 2026-11-09
tags:
  - 更多作品
  - 视觉与运动控制
publish: true
---

<div class="case-intro"><span class="case-kicker">地瓜丸的工作室 · 其他项目</span><p class="case-lead">同一个鼠标输入，沿两条主控路线驱动双轴机构。</p><div class="case-tags"><span>Python GUI</span><span>UART</span><span>ESP32-S3 / ESP-IDF</span><span>Verilog RTL</span><span>STEP / DIR</span><span>ZDT X42S</span></div></div><aside class="project-stage"><strong>这件作品进行到哪里</strong>两版均有主控实现、PC 程序及接线资料；具体整机表现需按各版验证</aside>



<figure class="case-figure"><a class="case-image-link" href="assets/projects/mouse-gimbal.svg"><picture><source media="(max-width:600px)" srcset="assets/projects/mouse-gimbal-mobile.svg" width="460" height="1000"><img src="assets/projects/mouse-gimbal.svg" alt="鼠标双轴云台｜ESP32-S3 与 FPGA 两版的数据与功能路径" width="1100" height="560" loading="lazy" decoding="async"></picture></a><figcaption>依据项目资料整理的功能关系示意；实际阶段见正文。<span>点击查看大图 ↗</span></figcaption></figure>

## 把鼠标动作变成可控的两轴运动

这件作品以电脑鼠标作为输入，通过中文界面调节灵敏度、速度和死区，再将命令发送给主控，驱动两台闭环步进电机。除了连续鼠标控制，还保留点动和激光开关，方便先检查方向与单轴动作，再进入完整交互。

## 同一条链路，两种实现

ESP32-S3 版本使用 ESP-IDF 固件接收串口命令并输出 STEP／DIR 脉冲，另有 Arduino 版本备份。FPGA 版本将串口接收、命令解析与两路脉冲发生组织成硬件逻辑，并保留状态指示。两版共用“电脑解释输入、主控执行时序、电机完成动作”的分工，但不能把一版的引脚、协议与配置直接套给另一版。

## 交互参数要能解释动作

灵敏度决定输入和运动的比例，死区减少静止附近的细小变化，速度限制则控制动作的激烈程度。鼠标停下之后怎样停止输出，同样是交互的一部分。中文 GUI 与串口协议使输入、命令和实际动作更容易逐步对照，也为后续接入视觉坐标留下清晰接口。

## 从能动到可联调

项目材料按硬件、接线、固件、GUI、协议与常见问题组织。实践时先核对供电、共地与两轴方向，再用小范围点动检查执行链；确认命令能被接收之后，才调节连续输入的手感。电机自身闭环与系统级视觉闭环是不同层次，不能因为使用闭环电机就声称完成了位置视觉反馈。

## 作品展示的重点

现有两条工程都保留实现与说明，本页对比的是软件任务与硬件并行逻辑如何承担同一种控制接口。未公开本机配置或整包工程，也不把未经同条件测量的实时性、精度和流畅程度写成胜负结论。它与自动追踪项目共用部分执行链，但鼠标版仍以人工输入为目标。

## 继续阅读

[[projects|更多作品]] · [[platform|地瓜丸的 FPGA 教学平台]] · [[contact|去找地瓜丸→]]

