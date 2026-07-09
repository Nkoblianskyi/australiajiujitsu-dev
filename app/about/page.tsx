'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export default function AboutPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = '请输入您的姓名'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = '请输入有效的电子邮件地址'
    if (!form.message.trim() || form.message.length < 10) e.message = '请输入至少10个字符的消息'
    if (!form.consent) e.consent = '请同意隐私政策后继续'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '', consent: false })
      setErrors({})
    }, 800)
  }

  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <div className="relative h-[40vh] min-h-[280px] bg-[var(--brand-navy)] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/about-bjj.png" alt="澳大利亚柔术" fill className="object-cover opacity-20" />
          </div>
          <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden="true">
            <span className="font-display text-[18vw] leading-none text-white/5 tracking-widest uppercase whitespace-nowrap">
              ABOUT
            </span>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-3 font-medium">
              我们的使命
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white uppercase leading-none">
              关于我们
            </h1>
          </div>
        </div>

        {/* About content */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-display text-4xl text-foreground uppercase mb-6 leading-tight">
                  传播柔术知识的平台
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  澳大利亚柔术是一个致力于传播柔术知识与文化的综合性信息平台。我们相信，
                  高质量的信息能够帮助每一位对这门武术感兴趣的人，
                  无论是刚刚起步的初学者，还是寻求深化理解的进阶练习者。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  我们的内容涵盖柔术的历史渊源、竞技规则、技术分析、训练方法和装备指南等多个维度。
                  所有内容均基于对这门艺术的深入研究和实践理解，致力于提供准确、深度的信息。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  柔术不仅是一种格斗技术，更是一种培养毅力、谦逊和持续成长心态的生活哲学。
                  我们希望通过这个平台，让更多人感受到柔术的独特魅力。
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: '准确的信息', body: '所有内容经过认真研究，确保信息的准确性和权威性。' },
                  { title: '深度内容', body: '不停留于表面，深入探讨技术原理、历史背景和竞技策略。' },
                  { title: '持续更新', body: '随着柔术运动的发展，我们持续更新和扩充内容库。' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5 p-5 bg-[var(--brand-off-white)]">
                    <div className="flex-shrink-0 w-1 bg-primary rounded-full" />
                    <div>
                      <h3 className="font-sans font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-[var(--brand-off-white)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-xs tracking-[0.35em] text-primary uppercase mb-4 font-medium">
                  联系我们
                </p>
                <h2 className="font-display text-4xl text-foreground uppercase mb-6 leading-tight">
                  有问题或建议?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  我们欢迎来自柔术爱好者的任何反馈、建议或合作提议。
                  请通过下方表单联系我们，我们将尽快回复。
                </p>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <span className="text-primary font-mono">@</span>
                  <span>info@australiajiujitsu.com</span>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-widest uppercase text-foreground font-medium mb-2">
                      姓名
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="您的姓名"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-widest uppercase text-foreground font-medium mb-2">
                      电子邮件
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs tracking-widest uppercase text-foreground font-medium mb-2">
                      消息
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="请输入您的消息..."
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  {/* Consent checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 border-2 transition-colors flex items-center justify-center ${
                            form.consent ? 'border-primary bg-primary' : 'border-border bg-background'
                          }`}
                        >
                          {form.consent && (
                            <svg viewBox="0 0 12 9" fill="none" className="w-3 h-3">
                              <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        我同意根据{' '}
                        <Link href="/privacy-policy" className="text-primary underline underline-offset-2">
                          隐私政策
                        </Link>{' '}
                        处理我的个人数据，以便回复我的询问。
                      </span>
                    </label>
                    {errors.consent && <p className="mt-1.5 text-xs text-destructive">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-4 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {loading ? '发送中...' : '发送消息'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-background max-w-sm w-full mx-4 p-10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 20 14" fill="none" className="w-6 h-4">
                <path d="M1 7L6.5 12.5L19 1" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-3xl text-foreground uppercase mb-3">消息已发送</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              感谢您的联系！我们已收到您的消息，将尽快通过电子邮件回复您。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs tracking-widest uppercase text-primary border-b border-primary pb-0.5"
            >
              关闭
            </button>
          </div>
        </div>
      )}

      <SiteFooter />
    </>
  )
}
