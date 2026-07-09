import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { articles } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: '文章与资讯',
  description: '探索柔术技术、训练方法、比赛策略和运动健康等各类专题文章。',
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Header */}
        <div className="bg-[var(--brand-navy)] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-4 font-medium">
              知识与洞见
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white uppercase leading-none text-balance">
              文章资讯
            </h1>
          </div>
        </div>

        {/* Featured article */}
        <section className="py-16 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-8 font-medium">
              精选文章
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="bg-[var(--brand-off-white)] aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-[var(--brand-blue)] relative">
                  <span
                    className="font-display text-[8rem] text-white/10 leading-none select-none"
                    aria-hidden="true"
                  >
                    BJJ
                  </span>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-xs tracking-widest text-white/60 uppercase">{featured.category}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xs tracking-widest text-primary uppercase font-medium">
                  {featured.category}
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase mt-3 mb-4 leading-tight group-hover:text-primary transition-colors text-balance">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-0.5 group-hover:gap-4 transition-all">
                    阅读全文 →
                  </span>
                  <span className="text-xs text-muted-foreground">{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All articles grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-10 font-medium">
              全部文章
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block"
                >
                  {/* Color band */}
                  <div className="h-1.5 bg-primary mb-5 group-hover:w-full transition-all w-12" />
                  <span className="text-xs tracking-widest text-primary uppercase font-medium">
                    {article.category}
                  </span>
                  <h3 className="font-sans font-semibold text-lg text-foreground mt-2 mb-3 leading-snug group-hover:text-primary transition-colors text-balance">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">阅读全文 →</span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
