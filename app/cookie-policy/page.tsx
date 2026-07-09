import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Cookie 政策',
  description: '了解澳大利亚柔术网站如何使用 Cookie 以及如何管理您的 Cookie 偏好。',
}

const cookieTable = [
  {
    name: 'cookie-consent',
    type: '必要型',
    purpose: '存储您对 Cookie 政策的同意或拒绝偏好',
    duration: '12 个月',
    source: '本站（第一方）',
  },
  {
    name: '_ga',
    type: '分析型',
    purpose: '区分唯一访客（Google Analytics）',
    duration: '2 年',
    source: 'Google（第三方）',
  },
  {
    name: '_ga_*',
    type: '分析型',
    purpose: '维护会话状态（Google Analytics）',
    duration: '2 年',
    source: 'Google（第三方）',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <div className="bg-[var(--brand-navy)] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase mb-4 font-medium">
              法律文件
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white uppercase leading-none text-balance">
              Cookie 政策
            </h1>
            <p className="mt-5 text-sm text-white/40">最后更新：2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">

            {/* Intro */}
            <div className="bg-[var(--brand-off-white)] border-l-4 border-primary p-6 mb-14">
              <p className="text-sm text-foreground leading-relaxed">
                本 Cookie 政策说明了 australiajiujitsu.com 如何使用 Cookie 及类似技术，以及您如何管理自己的 Cookie 偏好。
                我们遵循透明、告知后同意的原则，仅在获得您明确同意的情况下使用非必要 Cookie。
              </p>
            </div>

            <div className="flex flex-col gap-14">

              {/* Section 1 */}
              <section>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-3xl text-primary leading-none">01</span>
                  <h2 className="font-sans font-semibold text-foreground text-xl">什么是 Cookie？</h2>
                </div>
                <div className="pl-12 text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Cookie 是当您访问网站时由浏览器存储在您设备上的小型文本文件。它们帮助网站记住您的偏好设置、
                    维持您的登录状态，或收集关于网站使用情况的匿名统计数据。
                  </p>
                  <p>
                    Cookie 本身不会包含任何可直接识别您身份的信息，也不会对您的设备造成任何损害。
                    您可以随时通过浏览器设置查看或删除已存储的 Cookie。
                  </p>
                </div>
                <div className="mt-6 h-px bg-border" />
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-3xl text-primary leading-none">02</span>
                  <h2 className="font-sans font-semibold text-foreground text-xl">我们使用的 Cookie 类型</h2>
                </div>
                <div className="pl-12">
                  <div className="grid gap-5">
                    {[
                      {
                        type: '必要型 Cookie',
                        color: 'var(--brand-blue)',
                        desc: '这些 Cookie 对于网站的基本功能不可或缺，包括记录您的 Cookie 同意偏好。无需您的同意即可使用，但我们仍在此告知您其存在。',
                      },
                      {
                        type: '分析型 Cookie',
                        color: 'var(--brand-gold)',
                        desc: '这些 Cookie 帮助我们了解访客如何使用网站，例如访问了哪些页面、停留了多长时间。这些数据均为匿名处理，用于改善网站体验。仅在您同意后使用。',
                      },
                      {
                        type: '营销型 Cookie',
                        color: '#9ca3af',
                        desc: '本网站目前不使用营销型或重定向 Cookie。我们不会追踪用户用于个性化广告投放。',
                      },
                    ].map((item) => (
                      <div key={item.type} className="flex gap-5 p-5 bg-[var(--brand-off-white)]">
                        <div
                          className="flex-shrink-0 w-1 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <div>
                          <h3 className="font-sans font-semibold text-foreground text-sm mb-1.5">{item.type}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 h-px bg-border" />
              </section>

              {/* Section 3 - Cookie Table */}
              <section>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-3xl text-primary leading-none">03</span>
                  <h2 className="font-sans font-semibold text-foreground text-xl">具体 Cookie 列表</h2>
                </div>
                <div className="pl-12">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-[var(--brand-off-white)]">
                          <th className="text-left text-xs tracking-widest text-primary uppercase font-medium px-4 py-3 border border-border">Cookie 名称</th>
                          <th className="text-left text-xs tracking-widest text-primary uppercase font-medium px-4 py-3 border border-border">类型</th>
                          <th className="text-left text-xs tracking-widest text-primary uppercase font-medium px-4 py-3 border border-border">用途</th>
                          <th className="text-left text-xs tracking-widest text-primary uppercase font-medium px-4 py-3 border border-border">有效期</th>
                          <th className="text-left text-xs tracking-widest text-primary uppercase font-medium px-4 py-3 border border-border">来源</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cookieTable.map((row, i) => (
                          <tr key={i} className="hover:bg-[var(--brand-off-white)] transition-colors">
                            <td className="px-4 py-3 border border-border font-mono text-xs text-foreground">{row.name}</td>
                            <td className="px-4 py-3 border border-border text-muted-foreground">{row.type}</td>
                            <td className="px-4 py-3 border border-border text-muted-foreground">{row.purpose}</td>
                            <td className="px-4 py-3 border border-border text-muted-foreground whitespace-nowrap">{row.duration}</td>
                            <td className="px-4 py-3 border border-border text-muted-foreground whitespace-nowrap">{row.source}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8 h-px bg-border" />
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-3xl text-primary leading-none">04</span>
                  <h2 className="font-sans font-semibold text-foreground text-xl">如何管理 Cookie</h2>
                </div>
                <div className="pl-12 text-sm text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    您可以通过以下方式管理 Cookie 偏好：
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: '通过网站横幅',
                        desc: '首次访问时，页面底部会显示 Cookie 偏好横幅，您可以选择接受或拒绝非必要 Cookie。',
                      },
                      {
                        title: '通过浏览器设置',
                        desc: '所有主流浏览器均允许您查看、删除或阻止 Cookie。请查阅您浏览器的帮助文档获取具体操作指引。',
                      },
                      {
                        title: '清除现有 Cookie',
                        desc: '您可以随时在浏览器设置中清除所有已存储的 Cookie，这将同时清除您的 Cookie 同意记录。',
                      },
                      {
                        title: 'Google Analytics 退出',
                        desc: '如需退出 Google Analytics 追踪，您可以安装 Google Analytics 退出浏览器插件。',
                      },
                    ].map((item) => (
                      <div key={item.title} className="bg-[var(--brand-off-white)] p-4">
                        <h3 className="font-sans font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    请注意，禁用某些 Cookie 可能会影响本网站的部分功能。
                  </p>
                </div>
                <div className="mt-8 h-px bg-border" />
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-3xl text-primary leading-none">05</span>
                  <h2 className="font-sans font-semibold text-foreground text-xl">政策更新</h2>
                </div>
                <div className="pl-12 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    我们可能会不时更新本 Cookie 政策。政策变更时，我们将更新页面顶部的"最后更新"日期。
                    重大变更时，我们将在网站上发布通知，并要求您重新确认 Cookie 偏好。
                  </p>
                </div>
              </section>

              {/* Links */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                <Link
                  href="/privacy-policy"
                  className="text-sm font-medium text-primary border-b border-primary pb-0.5 hover:gap-4 transition-all"
                >
                  查看完整隐私政策 →
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-muted-foreground border-b border-border pb-0.5 hover:text-primary hover:border-primary transition-colors"
                >
                  联系我们 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
