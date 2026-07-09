import Link from 'next/link'
import LogoMark from './logo-mark'

const contentLinks = [
  { href: '/history', label: '柔术历史', en: 'History' },
  { href: '/rules', label: '规则与纪律', en: 'Rules' },
  { href: '/techniques', label: '技术与训练', en: 'Techniques' },
  { href: '/blog', label: '文章资讯', en: 'Blog' },
  { href: '/about', label: '关于我们', en: 'About' },
]

const legalLinks = [
  { href: '/cookie-policy', label: 'Cookie 政策' },
  { href: '/privacy-policy', label: '隐私政策' },
]

const beltColors = [
  { color: '#e8e8e8', label: '白带' },
  { color: '#74ACDF', label: '蓝带' },
  { color: '#7B5EA7', label: '紫带' },
  { color: '#8B5E3C', label: '棕带' },
  { color: '#111827', label: '黑带' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white">

      {/* Top accent line — Argentina flag stripe */}
      <div className="flex h-[4px] w-full">
        <div className="flex-1 bg-[var(--brand-blue)]" />
        <div className="flex-1 bg-white/90" />
        <div className="flex-1 bg-[var(--brand-blue)]" />
      </div>

      {/* Main content grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">

        {/* Col 1: Wordmark + mission */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group select-none w-fit">
            <LogoMark size={44} variant="white" className="transition-transform duration-200 group-hover:scale-105 flex-shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.7rem] tracking-[0.15em] text-white uppercase leading-none group-hover:text-[var(--brand-blue)] transition-colors duration-200">
                AUSTRALIA
              </span>
              <div className="flex items-center gap-2 mt-[3px]">
                <span className="font-display text-[0.9rem] tracking-[0.45em] text-[var(--brand-blue)] uppercase leading-none">
                  JIUJITSU
                </span>
                <span className="h-[1px] w-4 bg-[var(--brand-blue)]/30" />
                <span className="font-mono text-[8px] tracking-[0.2em] text-white/25 uppercase">BJJ</span>
              </div>
            </div>
          </Link>
          <p className="text-white/45 text-[13px] leading-loose max-w-[280px]">
            专为中文读者打造的澳大利亚柔术综合知识平台，传播格斗文化与技术理念。
          </p>
          <a
            href="mailto:info@australiajiujitsu.com"
            className="w-fit text-[10px] tracking-[0.28em] text-[var(--brand-blue)] uppercase font-mono hover:text-white transition-colors border-b border-[var(--brand-blue)]/40 hover:border-white pb-0.5"
          >
            info@australiajiujitsu.com
          </a>

          {/* Belt rank strip */}
          <div className="mt-auto pt-4">
            <div className="flex gap-1.5">
              {beltColors.map((belt) => (
                <div
                  key={belt.label}
                  className="h-2 flex-1"
                  style={{ backgroundColor: belt.color }}
                  title={belt.label}
                  aria-label={belt.label}
                />
              ))}
            </div>
            <p className="text-[9px] tracking-[0.25em] text-white/20 mt-1.5 font-mono uppercase">
              段位系统
            </p>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block md:col-span-1">
          <div className="w-px h-full bg-white/10 mx-auto" />
        </div>

        {/* Col 2: Navigation */}
        <div className="md:col-span-4">
          <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-mono mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-white/20 inline-block" />
            内容导航
          </p>
          <ul className="flex flex-col">
            {contentLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-2.5 border-b border-white/8 hover:border-white/25 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-white/20 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13px] font-medium text-white/65 group-hover:text-white transition-colors tracking-wide">
                      {link.label}
                    </span>
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-white/20 group-hover:text-[var(--brand-blue)] transition-colors uppercase font-mono">
                    {link.en}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Legal + coordinates */}
        <div className="md:col-span-3">
          <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-mono mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-white/20 inline-block" />
            法律信息
          </p>
          <ul className="flex flex-col gap-2.5 mb-10">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-white/45 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Decorative geo tag */}
          <div className="border border-white/10 p-4 mt-auto">
            <p className="font-mono text-[9px] text-white/25 tracking-[0.2em] uppercase leading-loose">
              LOCATION<br />
              <span className="text-white/50">SYDNEY, AUSTRALIA</span><br />
              <span className="text-[var(--brand-blue)]/70">33°S 151°E</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[10px] text-white/25 tracking-[0.18em] font-mono uppercase">
            &copy; 2026 australiajiujitsu.com &mdash; 版权所有
          </p>
          <p className="text-[10px] text-white/15 tracking-[0.22em] font-mono uppercase">
            更新于 2026 年 &bull; 柔术综合知识平台
          </p>
        </div>
      </div>

    </footer>
  )
}
