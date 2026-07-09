import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: '柔术历史',
  description: '探索柔术的完整发展历史，从日本起源到巴西革新，再到全球扩张的百年传承。',
}

const timeline = [
  {
    period: '1882',
    title: '柔道的诞生',
    body: '嘉纳治五郎在东京创立讲道馆柔道，将传统日本柔术系统化为一门完整的武道。这是现代柔术历史的重要起点，奠定了地面技术的理论基础。',
  },
  {
    period: '1914',
    title: '传入巴西',
    body: '日本柔道大师前田光世抵达巴西，开始向当地人传授柔道与柔术技艺。这次跨越大洋的传播，播下了巴西柔术诞生的种子。',
  },
  {
    period: '1920',
    title: '巴西本土化',
    body: '前田光世将技艺传授给巴西学生，后者开始根据自身的身体条件和实战需求，对技术体系进行革新改造，逐渐形成了独特的巴西柔术风格。',
  },
  {
    period: '1950',
    title: '全国挑战赛',
    body: '巴西柔术开始举办全国性的公开挑战赛，以公开对决的方式验证技术的实战价值。这一传统不仅推动了技术的快速发展，也确立了柔术在格斗武术中的独特地位。',
  },
  {
    period: '1993',
    title: '格斗界的革命',
    body: '第一届综合格斗赛事举办，一位体重仅80公斤的柔术选手击败了多名体型更大的对手，向世界展示了柔术的实战威力。这场比赛彻底改变了全球格斗界的认知。',
  },
  {
    period: '2003',
    title: '首届世界锦标赛',
    body: '第一届国际柔术联合会世界锦标赛在巴西举行，来自数十个国家的选手参与竞技。这标志着柔术正式跻身国际竞技体育的舞台。',
  },
  {
    period: '2010+',
    title: '全球化浪潮',
    body: '柔术迎来全球爆发式增长。亚洲、欧洲、中东、澳大利亚等地区的练习者数量急速上升。网络平台和国际赛事进一步加速了这门武术在全球范围内的传播。',
  },
]

export default function HistoryPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Page Hero */}
        <div className="relative h-[50vh] min-h-[360px] bg-[var(--brand-navy)] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/history-bjj.png" alt="柔术历史" fill className="object-cover opacity-25" />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-end pr-8 overflow-hidden pointer-events-none select-none"
            aria-hidden="true"
          >
            <span className="font-display text-[18vw] leading-none text-white/5 tracking-widest uppercase">
              HISTORY
            </span>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-3 font-medium">
              起源与传承
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white uppercase leading-none text-balance">
              柔术历史
            </h1>
          </div>
        </div>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-4xl text-foreground uppercase mb-6 leading-tight">
                  从日本武道到全球格斗艺术
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  柔术的历史是一部跨越大洲、融合文化的传奇。它诞生于日本武士阶层的实战需求，
                  经由南美洲的土地孕育出全新的生命，最终在二十一世纪成为全球最受欢迎的格斗运动之一。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  这门武术的独特之处在于其对实战有效性的执着追求。每一项技术的保留或淘汰，
                  都经过无数次真实对抗的检验。这种"以实战为师"的精神，构成了柔术文化的核心价值。
                </p>
              </div>
              <div className="relative">
                <div className="bg-[var(--brand-off-white)] p-8 border-l-4 border-primary">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed italic">
                    "柔能克刚，以小胜大。这不仅是一种格斗技术，更是一种哲学。"
                  </p>
                  <p className="mt-4 text-xs tracking-widest text-primary uppercase font-medium">
                    柔术核心理念
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[var(--brand-gold)] pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-[var(--brand-off-white)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-12 font-medium">
              历史时间线
            </p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="flex flex-col gap-0">
                {timeline.map((item, i) => (
                  <div key={item.period} className="flex gap-8 items-start py-8 border-b border-border last:border-0">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="font-display text-2xl text-primary">{item.period}</span>
                    </div>
                    {/* Dot */}
                    <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-primary bg-background mt-1 hidden md:block z-10" />
                    <div className="flex-1 pb-2">
                      <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Origins deeper */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl text-foreground uppercase mb-8 leading-tight">
                技术革新的哲学
              </h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  柔术在巴西的发展历程，是一次对传统武术的深刻反思。早期的练习者意识到，
                  许多传统技术在面对身材更高大、力量更强壮的对手时效果有限。于是，他们开始重新评估每一项技术的实战价值，
                  并针对性地开发了大量适用于地面对抗的新技术。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  这种务实主义的态度催生了柔术最重要的技术革新：防守游戏（Guard Game）的系统化发展。
                  在传统武道中，仰卧位置通常被视为劣势，但柔术却将其转化为强大的进攻平台。
                  这一思维转变，是柔术对格斗运动最深远的贡献。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  如今，柔术已不仅仅是一门格斗术，更成为了一种生活方式和哲学体系。
                  全球数百万练习者在道馆中磨砺技艺的同时，也在日复一日地领悟和践行柔术精神：
                  坚韧、谦逊、持续精进。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--brand-blue)]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="font-display text-3xl text-white uppercase">
              了解比赛规则
            </h2>
            <Link
              href="/rules"
              className="inline-flex items-center gap-3 border border-white text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[var(--brand-blue)] transition-colors"
            >
              查看规则 →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
