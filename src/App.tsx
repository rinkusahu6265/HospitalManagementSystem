import { Routes, Route } from 'react-router-dom'
import { ToastProvider } from '@/services/ToastService'
import HealthManagementRoutes from '@/features/health-management'
import LandingPage from '@/pages/LandingPage'

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<HealthManagementRoutes />} />
        </Routes>
      </div>
    </ToastProvider>
  )
}
