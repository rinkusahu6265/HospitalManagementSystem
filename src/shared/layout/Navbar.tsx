import { useState, useRef, useEffect } from 'react'
import { mockCurrentUser } from '@/features/health-management/data'

export default function Navbar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean
  onToggle: () => void
}) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header
      className="fixed top-0 right-0 z-40 flex items-center h-16 bg-gradient-to-r from-emerald-950 to-teal-900 text-white shadow-lg transition-all duration-300"
      style={{ left: collapsed ? '64px' : '260px' }}
    >
      <button
        onClick={onToggle}
        className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <i className="pi pi-bars text-xl" />
      </button>

      <div className="flex-1 flex items-center justify-between px-6">
        <div className="hidden md:flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
            <i className="pi pi-shield text-sm text-teal-900" />
          </div>
          <span className="text-sm font-medium text-white/80">
            University Health Management System
          </span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="relative hidden sm:block">
            <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-sm" />
            <input
              type="text"
              placeholder="Search..."
              className="w-56 lg:w-72 h-9 pl-9 pr-4 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:bg-white/15 focus:border-white/30 transition-all"
            />
          </div>

          <button className="relative p-2 rounded-lg hover:bg-white/10 transition-colors">
            <i className="pi pi-bell text-lg" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center">
              3
            </span>
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-sm font-bold text-[#0f2b4a]">
                {mockCurrentUser.name.charAt(0)}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium leading-tight">{mockCurrentUser.name}</p>
                <p className="text-[10px] text-white/60 leading-tight">{mockCurrentUser.email}</p>
              </div>
              <i className={`pi pi-chevron-down text-xs text-white/60 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">{mockCurrentUser.name}</p>
                  <p className="text-xs text-gray-500">{mockCurrentUser.email}</p>
                </div>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors">
                  <i className="pi pi-user text-blue-500" />
                  My Profile
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors">
                  <i className="pi pi-cog text-blue-500" />
                  Account Settings
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors">
                  <i className="pi pi-question-circle text-blue-500" />
                  Help & Support
                </a>
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    <i className="pi pi-sign-out text-red-500" />
                    Sign Out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
