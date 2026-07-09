'use client'

import Link from 'next/link'
import { useState } from 'react'
import LogoMark from './logo-mark'

const navLinks = [
  { href: '/history',    label: '历史',   en: 'History'    },
  { href: '/rules',      label: '规则',   en: 'Rules'      },
  { href: '/techniques', label: '技术',   en: 'Tech'       },
  { href: '/blog',       label: '文章',   en: 'Blog'       },
  { href: '/about',      label: '关于',   en: 'About'      },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/97 backdrop-blur-md">
      {/* Argentina flag stripe — 3 horizontal lines */}
      <div className="flex h-[4px] w-full">
        <div className="flex-1 bg-[var(--brand-blue)]" />
        <div className="flex-1 bg-white border-y border-border" />
        <div className="flex-1 bg-[var(--brand-blue)]" />
      </div>

      {/* Top meta bar */}
      <div className="hidden lg:flex items-center justify-between border-b border-border px-8 h-7 font-mono text-[9px] tracking-[0.28em] text-muted-foreground uppercase select-none bg-[var(--brand-off-white)]">
        <span>澳大利亚柔术知识平台 // Est. 2014</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] animate-pulse" aria-hidden="true" />
          Sydney, Australia — 33°S 151°E
        </span>
        <span>Vol. 01 // 2026</span>
      </div>

      {/* Main nav bar */}
      <div className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 h-[58px] flex items-center justify-between gap-4">

          {/* ── LOGO ── mark + stacked wordmark */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-3 group select-none"
            aria-label="Australia Jiujitsu — 首页"
          >
            {/* SVG shield mark */}
            <LogoMark size={38} className="transition-transform duration-200 group-hover:scale-105" />

            {/* Wordmark: two-line stack */}
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.45rem] tracking-[0.16em] text-foreground uppercase leading-[1] group-hover:text-[var(--brand-blue)] transition-colors duration-200">
                AUSTRALIA
              </span>
              <div className="flex items-center gap-2 mt-[3px]">
                <span className="font-display text-[0.82rem] tracking-[0.44em] text-[var(--brand-blue)] uppercase leading-[1]">
                  JIUJITSU
                </span>
                <span className="hidden sm:block h-[1px] w-4 bg-[var(--brand-blue)]/40" />
                <span className="hidden sm:block font-mono text-[8px] tracking-[0.2em] text-muted-foreground uppercase">
                  BJJ
                </span>
              </div>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-stretch h-[58px]" aria-label="主导航">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex flex-col items-center justify-center px-4 lg:px-5 group border-l border-border"
              >
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  {link.label}
                </span>
                <span className="text-[8px] font-mono tracking-[0.12em] text-[var(--brand-blue)]/50 mt-[2px] group-hover:text-[var(--brand-blue)] transition-colors">
                  {link.en}
                </span>
                {/* animated underline */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[var(--brand-blue)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/blog"
              className="flex items-center ml-2 px-6 bg-[var(--brand-navy)] text-white text-[10px] tracking-[0.28em] font-medium uppercase hover:bg-[var(--brand-blue)] transition-colors duration-200 border-l border-border"
            >
              开始阅读
            </Link>
          </nav>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
          >
            <span className={`block h-[2px] w-6 bg-foreground transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] bg-foreground transition-all duration-200 ${open ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block h-[2px] w-6 bg-foreground transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[420px]' : 'max-h-0'}`}>
        <nav className="bg-background border-b border-border divide-y divide-border" aria-label="移动导航">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-6 py-4 group"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-muted-foreground tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-[var(--brand-blue)] transition-colors tracking-wide">
                  {link.label}
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase group-hover:text-[var(--brand-blue)] transition-colors">
                {link.en} →
              </span>
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/blog"
              className="flex items-center justify-center bg-[var(--brand-navy)] text-white text-[11px] tracking-[0.3em] uppercase px-4 py-3.5 font-medium hover:bg-[var(--brand-blue)] transition-colors"
              onClick={() => setOpen(false)}
            >
              开始阅读
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
