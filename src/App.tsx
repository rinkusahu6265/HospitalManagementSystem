import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastProvider } from '@/services/ToastService'
import HealthManagementRoutes from '@/features/health-management'

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/health-management" replace />} />
          <Route path="/*" element={<HealthManagementRoutes />} />
        </Routes>
      </div>
    </ToastProvider>
  )
}
