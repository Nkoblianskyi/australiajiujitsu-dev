import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: '规则与纪律',
  description: '了解柔术比赛的完整规则体系，包括计分方式、时间设置、禁止动作和道馆礼仪。',
}

export default function RulesPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Page Hero */}
        <div className="relative h-[50vh] min-h-[360px] bg-[var(--brand-navy)] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/rules-bjj.png" alt="柔术规则" fill className="object-cover opacity-25" />
          </div>
          <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden="true">
            <span className="font-display text-[18vw] leading-none text-white/5 tracking-widest uppercase whitespace-nowrap">
              RULES
            </span>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-3 font-medium">
              竞技框架
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white uppercase leading-none text-balance">
              规则与纪律
            </h1>
          </div>
        </div>

        {/* Scoring System */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-12 font-medium">
              计分系统
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
              {[
                { points: '2', action: '过渡（Takedown）', desc: '将站立的对手摔倒至地面，自己保持上位控制。' },
                { points: '2', action: '击倒（Knockdown）', desc: '从站立位过渡到地面并获得控制位置。' },
                { points: '3', action: '过山车（Passing Guard）', desc: '突破对手的防守并获得侧位控制。' },
                { points: '4', action: '骑乘（Mount / Back）', desc: '获得骑乘姿势或背后控制位置，这是最高分值的控制位。' },
              ].map((item) => (
                <div key={item.action} className="p-6 border-r border-b border-border last:border-r-0 md:border-b-0">
                  <div className="font-display text-5xl text-primary mb-3">{item.points}</div>
                  <div className="text-xs tracking-widest text-foreground uppercase font-semibold mb-2">{item.action}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Match Formats */}
        <section className="py-20 bg-[var(--brand-off-white)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-12 font-medium">
              比赛格式与时间
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  level: '成人组',
                  duration: '8 分钟',
                  extras: '有延长赛规则，可进行加时对决。',
                },
                {
                  level: '青年组（16-17岁）',
                  duration: '6 分钟',
                  extras: '关节技限制适用，保护青少年运动员安全。',
                },
                {
                  level: '少年组（15岁以下）',
                  duration: '4 分钟',
                  extras: '严格限制关节技，以控制为主的比赛形式。',
                },
              ].map((item) => (
                <div key={item.level} className="bg-background p-8 border-t-4 border-primary">
                  <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{item.level}</h3>
                  <div className="font-display text-4xl text-primary mb-3">{item.duration}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.extras}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-12 font-medium">
              柔术纪律与流派
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-4xl text-foreground uppercase mb-6 leading-tight">
                  道服柔术（Gi BJJ）
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  穿着传统柔术道服进行对抗。道服的领口、袖口和裤腿提供了大量抓握点，
                  使技术组合更加丰富和多样。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  道服柔术强调技术的精细度和战略深度，十字固、领口绞等道服专属技术
                  是这一流派的标志性内容。腰带等级系统在道服柔术中也更为正式和严格。
                </p>
                <div className="space-y-2">
                  {['白带', '蓝带', '紫带', '棕带', '黑带'].map((belt, i) => (
                    <div key={belt} className="flex items-center gap-3">
                      <div
                        className="w-12 h-3 rounded-sm flex-shrink-0"
                        style={{
                          backgroundColor: ['#ffffff', '#3b82f6', '#7c3aed', '#92400e', '#111827'][i],
                          border: i === 0 ? '1px solid #e5e7eb' : 'none',
                        }}
                      />
                      <span className="text-sm text-foreground">{belt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display text-4xl text-foreground uppercase mb-6 leading-tight">
                  无道服柔术（No-Gi）
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  穿着紧身运动服进行对抗，没有道服领口和袖口提供的抓握点。
                  这种形式的柔术更接近现实搏斗环境，节奏更快，对体能要求更高。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  无道服柔术在近年来发展迅速，催生了大量针对现代肢体控制的新技术，
                  如腿锁系统、腰带控制（Body Lock）等。许多综合格斗选手以无道服柔术为基础训练。
                </p>
                <div className="bg-[var(--brand-off-white)] p-5">
                  <h4 className="font-sans font-semibold text-foreground mb-2 text-sm">主要区别</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">+</span>更快的比赛节奏</li>
                    <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">+</span>更强调体能和摔跤能力</li>
                    <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">+</span>腿锁技术体系更为完整</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prohibited actions */}
        <section className="py-20 bg-[var(--brand-navy)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-12 font-medium">
              禁止动作与安全规则
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: '打击动作',
                  desc: '柔术比赛中严格禁止任何形式的打击动作，包括拳击、踢击和肘膝攻击。这是柔术区别于其他格斗运动的核心原则之一。',
                },
                {
                  title: '颈椎压力技',
                  desc: '对颈椎施加直接压力的技术在大多数级别的比赛中被禁止，因其具有较高的受伤风险，不符合安全竞技的基本要求。',
                },
                {
                  title: '小关节操控',
                  desc: '对手指、脚趾等小关节施加压力的动作属于禁止技术，合法的关节技仅限于肘关节、膝关节、踝关节和肩关节。',
                },
                {
                  title: '拒绝认输',
                  desc: '对手发出认输信号后必须立即松手，继续施压或故意延迟松开将被判违规。尊重认输信号是柔术最基本的安全准则。',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-1 bg-red-500/60 rounded-full" />
                  <div>
                    <h3 className="font-sans font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dojo etiquette */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.35em] text-primary uppercase mb-8 font-medium">
                道馆礼仪
              </p>
              <h2 className="font-display text-4xl text-foreground uppercase mb-8 leading-tight">
                尊重是柔术的基础
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  '进出道馆时须鞠躬致敬',
                  '保持道服整洁，定期清洗',
                  '训练前后与每位训练伙伴握手',
                  '在授课时保持安静专注',
                  '用力量控制技术，不以伤害他人为目的',
                  '尊重每一位训练伙伴的身体状态',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start py-3 border-b border-border">
                    <span className="text-primary font-bold text-sm flex-shrink-0">+</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--brand-blue)]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="font-display text-3xl text-white uppercase">深入学习技术细节</h2>
            <Link
              href="/techniques"
              className="inline-flex items-center gap-3 border border-white text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[var(--brand-blue)] transition-colors"
            >
              技术指南 →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
