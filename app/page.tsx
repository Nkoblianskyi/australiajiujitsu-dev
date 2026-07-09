import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { articles } from '@/lib/blog-data'

export default function HomePage() {
  const previewArticles = articles.slice(0, 3)

  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-background pt-[90px] lg:pt-[90px]">
          {/* Main hero grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-7.5rem)]">

            {/* LEFT: Typography */}
            <div className="flex flex-col justify-between px-6 md:px-12 py-10 lg:py-16 border-r border-border relative overflow-hidden">
              {/* Ghost text watermark */}
              <span
                className="absolute -left-4 top-1/2 -translate-y-1/2 font-display text-[18vw] lg:text-[12vw] leading-none text-foreground/[0.04] uppercase whitespace-nowrap pointer-events-none select-none"
                aria-hidden="true"
              >
                BJJ
              </span>

              <div className="relative z-10">
                <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-8 font-medium flex items-center gap-3">
                  <span className="w-8 h-px bg-primary inline-block" />
                  澳大利亚柔术知识平台
                </p>
                <h1 className="font-display text-[13vw] sm:text-[11vw] lg:text-[8.5vw] xl:text-[7vw] leading-[0.9] text-foreground uppercase tracking-wide text-balance">
                  掌握
                  <br />
                  <span className="text-[var(--brand-blue)]">柔术</span>
                  <br />
                  艺术
                </h1>
              </div>

              <div className="relative z-10 mt-10 lg:mt-0">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
                  探索这门来自传统的格斗艺术。从历史渊源到现代竞技，深入了解柔术的每一个维度。
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/history"
                    className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[var(--brand-blue)] hover:text-white transition-colors"
                  >
                    探索历史
                    <span>→</span>
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-3 border border-border text-foreground px-7 py-3.5 text-[11px] font-medium tracking-[0.2em] uppercase hover:border-foreground transition-colors"
                  >
                    阅读文章
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Image + floating stats */}
            <div className="relative min-h-[50vw] lg:min-h-0 overflow-hidden bg-[var(--brand-navy)]">
              <Image
                src="/images/hero-bjj.png"
                alt="柔术对练"
                fill
                className="object-cover opacity-60 mix-blend-luminosity"
                priority
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--brand-blue) 1px, transparent 1px), linear-gradient(90deg, var(--brand-blue) 1px, transparent 1px)',
                  backgroundSize: '80px 80px',
                  opacity: 0.08,
                }}
                aria-hidden="true"
              />
              {/* Vertical side label */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
                <div className="w-px h-16 bg-white/20" />
                <span className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase [writing-mode:vertical-rl]">
                  JIUJITSU
                </span>
                <div className="w-px h-16 bg-white/20" />
              </div>
              {/* Floating stat card */}
              <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-sm border border-border p-5 max-w-[200px]">
                <div className="font-display text-5xl text-foreground leading-none">80%</div>
                <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase mt-2 leading-relaxed">
                  真实搏击进入地面阶段的比例
                </div>
              </div>
              {/* Top-right tag */}
              <div className="absolute top-6 left-6 border border-white/20 px-3 py-1.5 text-[9px] tracking-[0.3em] text-white/60 uppercase font-mono">
                地面格斗艺术
              </div>
            </div>
          </div>

          {/* Bottom ticker bar */}
          <div className="border-t border-border bg-[var(--brand-blue)] py-2.5 overflow-hidden">
            <div className="flex gap-12 animate-none whitespace-nowrap text-[10px] tracking-[0.3em] text-white/80 uppercase font-mono px-6 select-none">
              {['柔术', '地面格斗', '关节技', '窒息技', '巴西柔术', '竞技柔术', '无道服', '传统道服', '柔术历史', '训练技巧'].map(
                (item, i) => (
                  <span key={i}>
                    {item} <span className="text-white/40 mx-3">//</span>
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-[var(--brand-blue)] py-7">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '1914', label: '柔术传入巴西' },
                { num: '200+', label: '技术体系' },
                { num: '5', label: '段位等级' },
                { num: '2003', label: '首届世界锦标赛' },
              ].map((item) => (
                <div key={item.num} className="text-center text-white">
                  <div className="font-display text-4xl md:text-5xl tracking-wide">{item.num}</div>
                  <div className="text-xs tracking-widest uppercase text-white/70 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HISTORY PREVIEW */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <p className="text-xs tracking-[0.35em] text-primary uppercase mb-4 font-medium">
                  01 / 历史
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-foreground uppercase leading-none mb-6 text-balance">
                  百年传承
                  <br />
                  <span className="text-primary">的艺术</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  柔术起源于日本，经由巴西发展成为全球最具影响力���格斗运动之一。这段跨越百年、跨越大洲的历史，见证了人类智慧与技艺的传承。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  从柔道大师的传授，到巴西家族的革新，每一个时代都在这门武术中留下了深刻的印记。
                </p>
                <Link
                  href="/history"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-0.5 hover:gap-4 transition-all"
                >
                  阅读完整历史 →
                </Link>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/history-bjj.png" alt="柔术历史" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[var(--brand-gold)] pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* UNIQUE FACTS 1 */}
        <section className="py-20 bg-[var(--brand-off-white)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-12 font-medium">
              鲜为人知的事实
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  number: '01',
                  title: '无需优势力量',
                  body: '柔术的核心理念是以小克大。通过精准的杠杆原理和重心控制，体重较小的练习者能够有效应对更强壮的对手。',
                },
                {
                  number: '02',
                  title: '大脑的格斗',
                  body: '柔术常被称为"地面国际象棋"。每一次移动都涉及多层次���战术考量，是少数真正将智力与体力融合的格斗艺术。',
                },
                {
                  number: '03',
                  title: '安全的对抗',
                  body: '柔术的提交系统允许练习者在真实对抗中全力训练，同时最大程度降低受伤风险，这在格斗运动中是独一无二的。',
                },
              ].map((fact) => (
                <div key={fact.number} className="flex gap-6">
                  <span className="font-display text-4xl text-border leading-none flex-shrink-0">
                    {fact.number}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-2 text-lg">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{fact.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RULES PREVIEW */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/rules-bjj.png" alt="柔术规则" fill className="object-cover" />
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/40" />
              </div>
              <div>
                <p className="text-xs tracking-[0.35em] text-primary uppercase mb-4 font-medium">
                  02 / 规则与纪律
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-foreground uppercase leading-none mb-6 text-balance">
                  比赛的
                  <br />
                  <span className="text-primary">框架</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  了解柔术的计分系统、时间设置和比赛纪律，掌握规则才能在赛场上做出最优决策。
                </p>
                <Link
                  href="/rules"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-0.5 hover:gap-4 transition-all"
                >
                  查看完整规则 →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNIQUES PREVIEW */}
        <section className="py-24 bg-[var(--brand-navy)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-4 font-medium">
                  03 / 技术与训练
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-none mb-6 text-balance">
                  掌握每一个
                  <br />
                  <span className="text-[#74ACDF]">动作细节</span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  从基础姿势到高级提交技，系统化的技术指南帮助你理解每一个动作背后的力学原理，结合专业训练计划加速成长。
                </p>
                <Link
                  href="/techniques"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-gold)] border-b border-[var(--brand-gold)] pb-0.5 hover:gap-4 transition-all"
                >
                  查看技术指南 →
                </Link>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/techniques-bjj.png" alt="柔术技术" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[var(--brand-blue)] opacity-60 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPMENT */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
              <div>
                <p className="text-xs tracking-[0.35em] text-primary uppercase mb-4 font-medium">装备指南</p>
                <h2 className="font-display text-5xl md:text-6xl text-foreground uppercase leading-none text-balance">
                  训练所需
                  <br />
                  <span className="text-primary">装备</span>
                </h2>
              </div>
              <div className="relative w-full md:w-1/2 aspect-video overflow-hidden flex-shrink-0">
                <Image src="/images/equipment-bjj.png" alt="柔术装备" fill className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: '道服（Gi）',
                  desc: '柔术道服由上衣、裤子和腰带组成，棉质编织能承受激烈的抓握训练，是传统柔术的标志性装备。',
                },
                {
                  name: '无道服装备',
                  desc: '无道服训练使用紧身短裤和拉什防护衣，模拟现实搏斗环境，减少对抓握的依赖。',
                },
                {
                  name: '护齿套',
                  desc: '高强度对抗中必备的安全装备，有效保护牙齿和颌骨免受意外撞击伤害。',
                },
                {
                  name: '护膝 / 护踝',
                  desc: '保护关节在高频率的屈伸和扭转动作中不受伤害，对膝盖和脚踝的长期保护尤为重要。',
                },
              ].map((item) => (
                <div key={item.name} className="border-t-2 border-primary pt-5">
                  <h3 className="font-sans font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UNIQUE FACTS 2 */}
        <section className="py-20 bg-[var(--brand-blue)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-white/60 uppercase mb-12 font-medium">
              关于柔术的数据
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  stat: '180+',
                  label: '国家与地区',
                  body: '柔术目前在全球超过180个国家和地区拥有活跃的练习者群体，是增长最快的格斗运动之一。',
                },
                {
                  stat: '80%',
                  label: '地面对抗比例',
                  body: '研究表明，真实搏斗中约80%的对抗最终会进入地面阶段，这正是柔术训练价值的核心所在。',
                },
              ].map((item) => (
                <div key={item.stat} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="font-display text-6xl text-white leading-none">{item.stat}</div>
                    <div className="text-xs tracking-widest text-white/60 uppercase mt-1">{item.label}</div>
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm pt-2">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs tracking-[0.35em] text-primary uppercase mb-4 font-medium">
                  04 / 文章与资讯
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-foreground uppercase leading-none text-balance">
                  最新<span className="text-primary"> 内容</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-0.5 hover:gap-4 transition-all"
              >
                查看全部 →
              </Link>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              <Link
                href={`/blog/${previewArticles[0].slug}`}
                className="md:col-span-3 group block bg-[var(--brand-off-white)] p-8 hover:bg-secondary transition-colors"
              >
                <span className="text-xs tracking-widest text-primary uppercase font-medium">
                  {previewArticles[0].category}
                </span>
                <h3 className="font-sans font-semibold text-xl text-foreground mt-3 mb-4 leading-snug group-hover:text-primary transition-colors text-balance">
                  {previewArticles[0].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {previewArticles[0].excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs text-primary font-medium">
                  阅读全文{' '}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>

              <div className="md:col-span-2 flex flex-col gap-6">
                {previewArticles.slice(1).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block border-l-2 border-border hover:border-primary transition-colors pl-5 py-2"
                  >
                    <span className="text-xs tracking-widest text-primary uppercase font-medium">
                      {article.category}
                    </span>
                    <h3 className="font-sans font-medium text-foreground mt-2 mb-2 leading-snug group-hover:text-primary transition-colors text-balance">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 md:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-0.5"
              >
                查看全部文章 →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
