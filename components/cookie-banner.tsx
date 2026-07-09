'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie 偏好设置"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--brand-navy)] text-white border-t-2 border-[var(--brand-blue)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
          本网站使用 Cookie 以改善浏览体验。继续使用即表示您同意我们的{' '}
          <Link href="/cookie-policy" className="text-[#74ACDF] underline underline-offset-2">
            Cookie 政策
          </Link>{' '}
          和{' '}
          <Link href="/privacy-policy" className="text-[#74ACDF] underline underline-offset-2">
            隐私政策
          </Link>
          。
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs text-white/50 hover:text-white transition-colors px-3 py-2 tracking-wide"
          >
            拒绝
          </button>
          <button
            onClick={accept}
            className="text-xs font-medium bg-[var(--brand-blue)] text-white px-5 py-2.5 hover:bg-primary/90 transition-colors tracking-wide"
          >
            接受
          </button>
        </div>
      </div>
    </div>
  )
}
