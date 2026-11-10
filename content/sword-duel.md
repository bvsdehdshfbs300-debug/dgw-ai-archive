---
title: 不归砚／Sword Duel｜动作交互原型
description: 用清晰的动作状态、命中反馈与节奏，试做一场有手感的对决。
date: 2026-11-09
modified: 2026-11-10
tags:
  - 更多作品
  - 交互与游戏
publish: true
---

<div class="case-intro"><span class="case-kicker">地瓜丸的工作室 · 其他项目</span><p class="case-lead">用清晰的动作状态、命中反馈与节奏，试做一场有手感的对决。</p><div class="case-tags"><span>Canvas 2D</span><span>JavaScript</span><span>动作状态机</span><span>音效与粒子</span><span>Electron</span><span>本地记录</span></div></div><aside class="project-stage"><strong>这件作品进行到哪里</strong>已在 Electron 运行菜单、战斗、格挡与结算；未复验完整平衡和打包发行</aside>

<nav class="evidence-nav" aria-label="项目截图导览"><strong>本页图像 · 4 张</strong><a href="#shot-sword-duel-01-menu">01</a><a href="#shot-sword-duel-02-combat">02</a><a href="#shot-sword-duel-03-parry">03</a><a href="#shot-sword-duel-04-outcome">04</a></nav>

<figure id="shot-sword-duel-01-menu" class="evidence-shot"><a class="case-image-link gallery-full" href="assets/project-evidence/sword-duel-01-menu.webp"><img src="assets/project-evidence/sword-duel-01-menu-preview.webp" alt="不归砚原始菜单：拔刀开始、铸剑师名录与版本信息。" width="1000" height="587" loading="lazy" decoding="async"></a><figcaption><span class="evidence-kind">真实运行界面截图</span>不归砚原始菜单：拔刀开始、铸剑师名录与版本信息。<span class="evidence-zoom">点击看原图 ↗</span></figcaption></figure>


## 手感来自输入和反馈之间的关系

《不归砚》是一个网页动作游戏原型，工程名为 Sword Duel。玩家通过移动、攻击、瞬步和格挡参与战斗，界面同时反馈体力、连击、分数与失败结果。作品尝试解决的，是一次操作如何被玩家立即理解，以及下一次动作何时可以衔接。

## 动作需要明确的状态边界

实现围绕蓄力、挥击、格挡窗口、冲刺与冷却等状态展开。输入先决定动作是否允许发生，碰撞与攻击范围再决定结果，随后更新生命、分数和连击。不同状态的持续时间与取消关系影响节奏，如果所有输入都直接改变位置或伤害，画面即使热闹，也很难形成可学习的规则。

<figure id="shot-sword-duel-02-combat" class="evidence-shot"><a class="case-image-link gallery-full" href="assets/project-evidence/sword-duel-02-combat.webp"><img src="assets/project-evidence/sword-duel-02-combat-preview.webp" alt="试玩中的敌人接近与角色朝向，底部保留移动、瞬步和格挡提示。" width="1000" height="587" loading="lazy" decoding="async"></a><figcaption><span class="evidence-kind">真实运行界面截图</span>试玩中的敌人接近与角色朝向，底部保留移动、瞬步和格挡提示。<span class="evidence-zoom">点击看原图 ↗</span></figcaption></figure>

## 反馈要指向刚才发生的事

Canvas 绘制、粒子、镜头震动、短暂停顿与音效共同强调命中、招架和失败。表现层需要服从动作逻辑：玩家应能分清击中了、被防住了，还是因为状态限制没有出手，而非每次都播放同一种夸张效果。连续反馈的强弱也要有区别，给重要事件留出辨识度。

<figure id="shot-sword-duel-03-parry" class="evidence-shot"><a class="case-image-link gallery-full" href="assets/project-evidence/sword-duel-03-parry.webp"><img src="assets/project-evidence/sword-duel-03-parry-preview.webp" alt="右键格挡时出现的蓝色防御弧形反馈。" width="1000" height="587" loading="lazy" decoding="async"></a><figcaption><span class="evidence-kind">真实运行界面截图</span>右键格挡时出现的蓝色防御弧形反馈。<span class="evidence-zoom">点击看原图 ↗</span></figcaption></figure>

## 从浏览器原型到桌面封装

工程保留 HTML 页面与 Electron 入口，包含本地最高分记录和桌面打包配置。网页与桌面运行环境不同，存储、音频、窗口焦点和键盘输入需要分别检查。封装能力让原型更容易打开，但安装包存在并不能证明每种设备上都已完成测试。

## 当前展示范围

页面与工程配置能说明玩法结构、动作状态和反馈设计，本轮没有运行最新版本，因此不声称完成长期平衡、兼容性测试或正式发行。这里把它作为持续创作的动作交互实验，与教学平台中“操作之后必须给出可解释反馈”的设计原则相互连接。

<figure id="shot-sword-duel-04-outcome" class="evidence-shot"><a class="case-image-link gallery-full" href="assets/project-evidence/sword-duel-04-outcome.webp"><img src="assets/project-evidence/sword-duel-04-outcome-preview.webp" alt="一次试玩结束后的失败与再次挑战提示。" width="1000" height="587" loading="lazy" decoding="async"></a><figcaption><span class="evidence-kind">真实运行界面截图</span>一次试玩结束后的失败与再次挑战提示。<span class="evidence-zoom">点击看原图 ↗</span></figcaption></figure>

<details class="evidence-diagram"><summary>查看功能路径示意</summary>

<figure class="case-figure"><a class="case-image-link" href="assets/projects/sword-duel.svg"><picture><source media="(max-width:600px)" srcset="assets/projects/sword-duel-mobile.svg" width="460" height="1000"><img src="assets/projects/sword-duel.svg" alt="不归砚／Sword Duel｜动作交互原型的数据与功能路径" width="1100" height="560" loading="lazy" decoding="async"></picture></a><figcaption>依据项目资料整理的功能关系示意；实际阶段见正文。<span>点击查看大图 ↗</span></figcaption></figure>

</details>

## 继续阅读

[[projects|更多作品]] · [[platform|地瓜丸的 FPGA 教学平台]] · [[contact|去找地瓜丸→]]

