import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: '技术与训练',
  description: '系统化的柔术技术指南，涵盖地面控制、防守游戏、提交技术以及专业训练计划。',
}

const techniques = [
  {
    category: '地面控制',
    items: [
      { name: '骑乘姿势（Mount）', desc: '坐在对手腹部上方的最优控制位，提供极高的打击和提交机会。' },
      { name: '侧位控制（Side Control）', desc: '横向压制对手上半身，限制对手移动空间，是过渡到骑乘的理想中转站。' },
      { name: '背后控制（Back Mount）', desc: '控制对手背部，是得分最高的控制位，也是绞杀技的最佳发动位置。' },
    ],
  },
  {
    category: '防守游戏',
    items: [
      { name: '封闭式防守（Closed Guard）', desc: '双腿锁住对手腰部，在仰卧位创造进攻机会的基础防守形式。' },
      { name: '蝴蝶防守（Butterfly Guard）', desc: '利用双脚钩住对手内侧大腿，形成强力的扫荡平台。' },
      { name: '深半防守（Deep Half Guard）', desc: '深入控制对手单腿，创造翻转和起身机会的高级防守变体。' },
    ],
  },
  {
    category: '提交技术',
    items: [
      { name: '手臂十字锁（Armbar）', desc: '利用全身力量对肘关节施压，是柔术最经典的提交技之一。' },
      { name: '三角绞（Triangle Choke）', desc: '用腿部形成三角形绞杀颈部动脉，可从多种位置发动。' },
      { name: '踝关节锁（Ankle Lock）', desc: '控制并施压踝关节，是无道服比赛中常见的腿锁技术。' },
    ],
  },
  {
    category: '过渡技术',
    items: [
      { name: '过山车（Guard Pass）', desc: '突破对手防守，从中立或劣势位置获得控制优势的核心技术。' },
      { name: '扫荡（Sweep）', desc: '从防守位置翻转局面，获得上位控制的进攻性动作。' },
      { name: '摔法技术（Takedown）', desc: '从站立位将对手控制至地面的技术，是比赛开场阶段的关键。' },
    ],
  },
]

const trainingPlan = [
  { week: '第1-4周', focus: '基础建立', details: '跌倒保护、基础站姿、封闭式防守、基本逃脱' },
  { week: '第5-8周', focus: '技术扩展', details: '扫荡技术、侧位控制、基础手臂十字锁、简单过渡' },
  { week: '第9-12周', focus: '整合与对抗', details: '自由练习、技术链整合、压力测试' },
  { week: '第13-20周', focus: '深化训练', details: '防守系统建立、提交组合、比赛模拟' },
]

export default function TechniquesPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Page Hero */}
        <div className="relative h-[50vh] min-h-[360px] bg-[var(--brand-navy)] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/techniques-bjj.png" alt="柔术技术" fill className="object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden="true">
            <span className="font-display text-[16vw] leading-none text-white/5 tracking-widest uppercase whitespace-nowrap ml-8">
              TECHNIQUES
            </span>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-3 font-medium">
              技艺与方法
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white uppercase leading-none text-balance">
              技术与训练
            </h1>
          </div>
        </div>

        {/* Technique Categories */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-12 font-medium">
              技术体系
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {techniques.map((cat) => (
                <div key={cat.category}>
                  <h2 className="font-display text-3xl text-foreground uppercase mb-6 border-b-2 border-primary pb-3">
                    {cat.category}
                  </h2>
                  <div className="flex flex-col gap-5">
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex gap-4">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                          <h3 className="font-sans font-semibold text-foreground mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core principles */}
        <section className="py-20 bg-[var(--brand-navy)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-12 font-medium">
              训练核心原则
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '位置优先',
                  body: '永远先建立稳固的控制位置，再寻找提交机会。急于求成往往导致失去位置优势。',
                },
                {
                  title: '持续流动',
                  body: '对抗是动态的。与其固守某一技术，不如保持流动性，根据对手的反应不断调整战术。',
                },
                {
                  title: '技术而非力量',
                  body: '在训练中刻意减少力量的使用，迫使自己寻找更优的技术路径。技术上的进步才是可持续的进步。',
                },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 p-8">
                  <h3 className="font-sans font-semibold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Plan */}
        <section className="py-20 bg-[var(--brand-off-white)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-12 font-medium">
              进阶训练计划
            </p>
            <h2 className="font-display text-4xl text-foreground uppercase mb-10 leading-tight">
              二十周系统训练路线图
            </h2>
            <div className="grid md:grid-cols-4 gap-0 border border-border">
              {trainingPlan.map((phase, i) => (
                <div
                  key={phase.week}
                  className="p-6 border-r border-border last:border-r-0 flex flex-col"
                >
                  <span className="font-display text-3xl text-primary mb-1">{i + 1}</span>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3">{phase.week}</span>
                  <h3 className="font-sans font-semibold text-foreground mb-3">{phase.focus}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{phase.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warm up drills */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-xs tracking-[0.35em] text-primary uppercase mb-6 font-medium">
                  必备热身动作
                </p>
                <h2 className="font-display text-4xl text-foreground uppercase mb-8 leading-tight">
                  训练前的准备
                </h2>
                <div className="space-y-4">
                  {[
                    { name: '前滚翻与后滚翻', purpose: '建立地面移动感觉，保护颈椎和脊椎' },
                    { name: '桥式（Bridge）', purpose: '强化核心力量，练习逃脱骑乘的基础动作' },
                    { name: '虾式爬行（Shrimping）', purpose: '柔术特有的地面移动训练，是所有防守动作的基础' },
                    { name: '爬行（Combat Base）', purpose: '提升膝关节灵活性和下肢协调性' },
                  ].map((drill) => (
                    <div key={drill.name} className="flex gap-4 py-3 border-b border-border">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <div>
                        <span className="font-medium text-foreground text-sm">{drill.name}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{drill.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-[0.35em] text-primary uppercase mb-6 font-medium">
                  训练建议
                </p>
                <h2 className="font-display text-4xl text-foreground uppercase mb-8 leading-tight">
                  高效学习策略
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      title: '慢速练习',
                      body: '以正确的技术慢速重复，比以错误姿势的快速练习效果好数倍。速度是技术成熟的结果，而非前提。',
                    },
                    {
                      title: '训练日志',
                      body: '记录每次训练中学到的技术要点和遇到的问题，定期复盘能显著加速进步。',
                    },
                    {
                      title: '观看高水平比赛',
                      body: '观察顶级选手如何在实战中应用技术，将书本知识转化为直觉性理解。',
                    },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-[var(--brand-off-white)] p-5">
                      <h3 className="font-sans font-semibold text-foreground mb-2 text-sm">{tip.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tip.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--brand-blue)]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="font-display text-3xl text-white uppercase">阅读更多技术文章</h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 border border-white text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[var(--brand-blue)] transition-colors"
            >
              前往博客 →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
