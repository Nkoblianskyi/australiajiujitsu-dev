import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: '隐私政策',
  description: '了解澳大利亚柔术如何收集、使用和保护您的个人数据。',
}

const sections = [
  {
    id: '1',
    title: '数据控制者信息',
    content: `澳大利亚柔术（australiajiujitsu.com）是本网站个人数据的控制者。如您有任何关于数据处理的问题，请通过以下方式联系我们：

电子邮件：info@australiajiujitsu.com
网站：www.australiajiujitsu.com`,
  },
  {
    id: '2',
    title: '我们收集的数据类型',
    content: `我们可能收集以下类别的个人数据：

• 联系信息：当您通过联系表单提交时，我们收集您的姓名和电子邮件地址；
• 消息内容：您在联系表单中填写的文字内容；
• 使用数据：关于您如何使用本网站的匿名统计信息，包括页面浏览量和访问时长；
• Cookie 数据：关于您偏好设置的小型文本文件（详见我们的 Cookie 政策）。

我们不收集任何特殊类别的个人数据（如健康信息、种族、宗教信仰等）。`,
  },
  {
    id: '3',
    title: '数据收集目的与法律依据',
    content: `我们基于以下目的和法律依据处理您的个人数据：

回复咨询（合同履行/合法利益）：当您通过联系表单提交消息时，我们使用您提供的联系信息来回复您的询问。法律依据为您的明确同意（您在提交前必须勾选同意复选框）。

网站分析（合法利益）：我们可能使用匿名化的使用数据来改善网站性能和用户体验。这些数据不会识别具体个人。

Cookie（同意）：我们仅在获得您明确同意的情况下使用非必要 Cookie。`,
  },
  {
    id: '4',
    title: '数据存储与保留期限',
    content: `您通过联系表单提交的数据将在回复您的询问后保留不超过12个月，之后将被安全删除，除非法律要求更长的保留期限。

匿名化的网站使用数据（不含个人标识符）可能被保留用于长期统计分析。`,
  },
  {
    id: '5',
    title: '数据共享与第三方',
    content: `我们不会出售、出租或以商业方式分享您的个人数据。

在以下情况下，我们可能与第三方共享数据：
• 提供网站托管和技术基础设施的服务提供商（仅限履行合同所需的范围）；
• 法律要求时，依据适用法律法规的规定。

所有数据处理合作伙伴均受到与本政策相应的数据保护协议的约束。`,
  },
  {
    id: '6',
    title: '您的数据权利',
    content: `根据适用的数据保护法律（包括 GDPR），您享有以下权利：

• 访问权：您有权获取我们持有的关于您的个人数据副本；
• 更正权：您有权要求更正不准确的个人数据；
• 删除权：在某些情况下，您有权要求删除您的个人数据；
• 限制处理权：您有权要求我们在特定情况下限制对您数据的处理；
• 数据可携带权：您有权以结构化、常用的机器可读格式接收您的数据；
• 撤回同意权：您可以随时撤回之前给予的数据处理同意；
• 投诉权：您有权向相关数据保护监管机构提出投诉。

如需行使以上任何权利，请发送电子邮件至 info@australiajiujitsu.com。我们将在30天内回复您的请求。`,
  },
  {
    id: '7',
    title: '数据安全',
    content: `我们采用行业标准的技术和组织措施保护您的个人数据，防止未经授权的访问、泄露、修改或销毁，包括：

• 使用 HTTPS 加密传输数据；
• 限制对个人数据的访问权限；
• 定期审查数据安全实践。

尽管我们尽力保护您的数据，但互联网传输并非完全安全。`,
  },
  {
    id: '8',
    title: '儿童隐私',
    content: `本网站不面向16岁以下的儿童，我们不会有意收集儿童的个人数据。如果您认为我们无意中收集了儿童数据，请立即联系我们，我们将及时删除相关信息。`,
  },
  {
    id: '9',
    title: '政策更新',
    content: `我们可能会不时更新本隐私政策，以反映业务变化或法律要求的变更。更新后的政策将在本页面发布，并注明最新修订日期。重大变更时，我们将通过网站公告通知用户。

我们建议您定期查阅本政策以了解最新内容。`,
  },
]

export default function PrivacyPolicyPage() {
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
              隐私政策
            </h1>
            <p className="mt-5 text-sm text-white/40">最后更新：2026年7月</p>
          </div>
        </div>

        {/* Content */}
        <div className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Sidebar TOC */}
              <aside className="hidden md:block">
                <p className="text-xs tracking-widest text-primary uppercase font-medium mb-5">目录</p>
                <nav className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#section-${s.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug py-1 border-b border-border"
                    >
                      {s.id}. {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    href="/cookie-policy"
                    className="text-xs text-primary underline underline-offset-4"
                  >
                    Cookie 政策 →
                  </Link>
                </div>
              </aside>

              {/* Main content */}
              <div className="md:col-span-3">
                <div className="bg-[var(--brand-off-white)] border-l-4 border-primary p-6 mb-12">
                  <p className="text-sm text-foreground leading-relaxed">
                    本隐私政策说明了澳大利亚柔术（australiajiujitsu.com）如何收集、使用、存储和保护您在使用本网站时提供的个人数据。
                    我们致力于保护您的隐私，并依据适用的数据保护法律（包括欧盟通用数据保护条例 GDPR 及澳大利亚隐私法）透明地处理您的数据。
                  </p>
                </div>

                <div className="flex flex-col gap-12">
                  {sections.map((section) => (
                    <section key={section.id} id={`section-${section.id}`}>
                      <div className="flex items-baseline gap-4 mb-5">
                        <span className="font-display text-3xl text-primary leading-none flex-shrink-0">
                          {section.id.padStart(2, '0')}
                        </span>
                        <h2 className="font-sans font-semibold text-foreground text-xl leading-snug">
                          {section.title}
                        </h2>
                      </div>
                      <div className="pl-12">
                        {section.content.split('\n').map((line, i) => {
                          const trimmed = line.trim()
                          if (!trimmed) return null
                          if (trimmed.startsWith('•')) {
                            return (
                              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2 flex gap-2">
                                <span className="text-primary flex-shrink-0">+</span>
                                <span>{trimmed.slice(1).trim()}</span>
                              </p>
                            )
                          }
                          return (
                            <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
                              {trimmed}
                            </p>
                          )
                        })}
                      </div>
                      <div className="mt-6 h-px bg-border" />
                    </section>
                  ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-14 bg-[var(--brand-off-white)] p-8">
                  <h3 className="font-sans font-semibold text-foreground mb-3">关于隐私的疑问？</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    如果您对本隐私政策有任何疑问，或希望行使您的数据权利，请随时与我们联系。
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-0.5 hover:gap-4 transition-all"
                  >
                    联系我们 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
