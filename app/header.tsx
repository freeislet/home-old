'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ThemeMode } from '@/components/theme-mode'

export function Header() {
  const pathname = usePathname()
  const isActive = (url: string) => pathname === url
  const navItems = [
    ['Home', '/'],
    ['Portfolio 1', '/portfolio1'],
    ['Portfolio 2', '/portfolio2'],
    ['Portfolio 3', '/portfolio3'],
    ['About', '/about'],
  ]

  return (
    <div className="header-layout flex flex-wrap items-end justify-between">
      <h1 className="flex-shrink-0 pr-6 text-4xl font-extrabold italic">
        Portfolio&nbsp;
        <span className="text-3xl font-medium">
          under construction
        </span>
      </h1>
      <div className="ml-auto mt-4">
        <nav className="inline text-sm font-medium">
          {navItems.map(([title, url], index) => (
            <Link
              className={
                `py-1 px-2 rounded-sm hover:bg-theme-active/30
                ${isActive(url) ? 'text-theme-active font-bold' : ''}`
              }
              href={url}
              key={index}
            >{title}</Link>
          ))}
        </nav>
        <div className="inline ml-4">
          <ThemeMode />
        </div>
      </div>
    </div>
  )
}
