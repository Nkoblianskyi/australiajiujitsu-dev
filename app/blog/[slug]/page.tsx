import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { articles, getArticleBySlug } from '@/lib/blog-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3)

  // Parse simple markdown-style headings and paragraphs
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactNode[] = []
    let key = 0

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed) continue

      if (trimmed.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="font-display text-3xl text-foreground uppercase mt-10 mb-4 leading-tight">
            {trimmed.slice(3)}
          </h2>
        )
      } else if (trimmed.startsWith('- ')) {
        elements.push(
          <li key={key++} className="text-muted-foreground leading-relaxed mb-2 ml-4 list-disc">
            {trimmed.slice(2)}
          </li>
        )
      } else {
        elements.push(
          <p key={key++} className="text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        )
      }
    }
    return elements
  }

  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Article Hero */}
        <div className="bg-[var(--brand-navy)] py-20">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-8 tracking-widest uppercase"
            >
              ← 返回文章列表
            </Link>
            <span className="block text-xs tracking-widest text-[var(--brand-gold)] uppercase font-medium mb-4">
              {article.category}
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-white uppercase leading-tight text-balance">
              {article.title}
            </h1>
            <p className="mt-5 text-sm text-white/40">{article.readTime} 阅读</p>
          </div>
        </div>

        {/* Article body */}
        <article className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            {/* Excerpt */}
            <div className="border-l-4 border-primary pl-6 mb-12">
              <p className="text-lg text-foreground leading-relaxed font-light italic">{article.excerpt}</p>
            </div>

            {/* Content */}
            <div className="max-w-2xl">
              {renderContent(article.content)}
            </div>
          </div>
        </article>

        {/* Other articles */}
        <section className="py-16 bg-[var(--brand-off-white)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-primary uppercase mb-10 font-medium">
              继续阅读
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group block"
                >
                  <div className="h-1.5 bg-primary mb-5 group-hover:w-full transition-all w-12" />
                  <span className="text-xs tracking-widest text-primary uppercase font-medium">
                    {a.category}
                  </span>
                  <h3 className="font-sans font-semibold text-foreground mt-2 mb-2 leading-snug group-hover:text-primary transition-colors text-balance">
                    {a.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{a.excerpt}</p>
                  <p className="mt-4 text-xs font-medium text-primary">阅读全文 →</p>
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
