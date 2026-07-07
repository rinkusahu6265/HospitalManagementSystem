import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} />
      <Navbar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      <main
        className="pt-16 transition-all duration-300 min-h-screen"
        style={{ marginLeft: collapsed ? '64px' : '260px' }}
      >
        {children}
      </main>
    </div>
  )
}
