import { useLocation, useNavigate } from 'react-router-dom'
import { mockCurrentUser, getPortalTiles } from '@/features/health-management/data'

const ROLE_BADGES: Record<string, { label: string; color: string }> = {
  health_admin: { label: 'Admin', color: 'bg-amber-500' },
  health_doctor: { label: 'Doctor', color: 'bg-emerald-500' },
  health_pharmacist: { label: 'Pharmacist', color: 'bg-violet-500' },
  'employee-health': { label: 'Employee', color: 'bg-sky-500' },
  health_view: { label: 'Viewer', color: 'bg-gray-500' },
  'health-head': { label: 'Head', color: 'bg-indigo-500' },
  'health-super-head': { label: 'Super Head', color: 'bg-rose-500' },
}

const ROLE_PORTAL_LINKS: Record<string, string> = {
  health_admin: '/health-management/admin',
  health_doctor: '/health-management/doctor',
  health_pharmacist: '/health-management/pharmacist',
  'employee-health': '/health-management/employee',
}

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  const location = useLocation()
  const navigate = useNavigate()
  const tiles = getPortalTiles(mockCurrentUser.role)
  const badge = ROLE_BADGES[mockCurrentUser.role] || { label: 'User', color: 'bg-gray-500' }
  const portalLink = ROLE_PORTAL_LINKS[mockCurrentUser.role] || '/health-management'

  const isActive = (path: string) => location.pathname === path

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-gradient-to-b from-teal-900 to-emerald-950 text-white shadow-2xl transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'
        }`}
    >
      <div className="flex items-center gap-3 h-16 px-4 border-b border-white/10 shrink-0">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
          <i className="pi pi-heart text-lg text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-sm font-bold leading-tight text-white">UMS Health</h1>
            <p className="text-[10px] text-white/50 leading-tight">Management System</p>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-3 px-2 scrollbar-thin">
        {!collapsed && (
          <p className="px-3 text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">
            Main Menu
          </p>
        )}

        <nav className="space-y-0.5">
          {tiles.map((tile) => {
            const active = isActive(tile.to)
            const colorMap: Record<string, string> = {
              'border-blue-500': 'bg-blue-500',
              'border-green-500': 'bg-green-500',
              'border-purple-500': 'bg-purple-500',
              'border-indigo-500': 'bg-indigo-500',
              'border-yellow-500': 'bg-yellow-500',
              'border-teal-500': 'bg-teal-500',
              'border-orange-500': 'bg-orange-500',
              'border-pink-500': 'bg-pink-500',
              'border-cyan-500': 'bg-cyan-500',
              'border-violet-500': 'bg-violet-500',
              'border-red-500': 'bg-red-500',
              'border-gray-500': 'bg-gray-500',
            }
            const dotColor = colorMap[tile.color] || 'bg-blue-500'

            return (
              <button
                key={tile.to}
                onClick={() => navigate(tile.to)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group relative ${active
                    ? 'bg-white/15 text-white shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                title={collapsed ? tile.title : undefined}
              >
                {active && (
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full ${dotColor}`} />
                )}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${active ? `${dotColor} bg-opacity-20` : 'bg-white/5'
                  }`}>
                  <i className={`pi ${tile.icon} text-sm ${active ? 'text-white' : 'text-white/50'}`} />
                </div>
                {!collapsed && (
                  <span className="text-left font-medium truncate">{tile.title}</span>
                )}
              </button>
            )
          })}
        </nav>

        {!collapsed && tiles.length > 0 && (
          <>
            <div className="border-t border-white/10 my-3" />
            <p className="px-3 text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">
              Quick Links
            </p>
            <button
              onClick={() => navigate(portalLink)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <i className="pi pi-home text-sm text-white/50" />
              </div>
              {!collapsed && <span className="font-medium truncate">Portal Home</span>}
            </button>
          </>
        )}
      </div>

      <div className={`border-t border-white/10 p-3 shrink-0 ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed ? (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-xs font-bold text-[#0a1f38]">
            {mockCurrentUser.name.charAt(0)}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-sm font-bold text-[#0a1f38] shrink-0">
              {mockCurrentUser.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate text-white">{mockCurrentUser.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${badge.color}`} />
                <span className="text-[10px] text-white/50">{badge.label}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
