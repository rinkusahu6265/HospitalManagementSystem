import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/shared/layout'
import HealthPortalPage from './pages/HealthPortalPage'
import AdminPortalPage from './pages/AdminPortalPage'
import AdminDashboard from './pages/dashboard/AdminDashboard'
import AdminSettings from './pages/settings/AdminSettings'
import DoctorPortalPage from './pages/DoctorPortalPage'
import DoctorDashboard from './pages/dashboard/DoctorDashboard'
import EmployeePortalPage from './pages/EmployeePortalPage'
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard'
import PharmacistDashboard from './pages/dashboard/PharmacistDashboard'
import MembershipsPage from './pages/memberships/MembershipsPage'
import AddMembershipPage from './pages/memberships/AddMembershipPage'
import HealthRecordsPage from './pages/records/HealthRecordsPage'
import AddHealthRecordPage from './pages/records/AddHealthRecordPage'
import DoctorsPage from './pages/doctors/DoctorsPage'
import MedicalStockPage from './pages/stock/MedicalStockPage'
import AddStockPage from './pages/stock/AddStockPage'
import PrescriptionsPage from './pages/prescriptions/PrescriptionsPage'
import AddPrescriptionPage from './pages/prescriptions/AddPrescriptionPage'
import DispensaryPage from './pages/dispensary/DispensaryPage'
import AppointmentsPage from './pages/appointments/AppointmentsPage'
import AddAppointmentPage from './pages/appointments/AddAppointmentPage'
import GuestUsersPage from './pages/guest-users/GuestUsersPage'
import AddGuestUserPage from './pages/guest-users/AddGuestUserPage'
import ReportsPage from './pages/reports/ReportsPage'
import PharmacistPortalPage from './pages/PharmacistPortalPage'
import SubscriptionsPage from './pages/subscriptions/SubscriptionsPage'
import AddSubscriptionPage from './pages/subscriptions/AddSubscriptionPage'

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
      <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
        <i className="pi pi-clock text-4xl text-amber-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-700">Coming Soon</h2>
      <p className="text-gray-400">This feature is under development</p>
    </div>
  )
}

export default function HealthManagementRoutes() {
  return (
    <AppLayout>
      <Routes>
        <Route path="health-management" element={<HealthPortalPage />} />
        <Route path="health-management/admin" element={<AdminPortalPage />} />
        <Route path="health-management/admin/dashboard" element={<AdminDashboard />} />
        <Route path="health-management/admin/settings" element={<AdminSettings />} />
        <Route path="health-management/doctor" element={<DoctorPortalPage />} />
        <Route path="health-management/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="health-management/pharmacist" element={<PharmacistPortalPage />} />
        <Route path="health-management/pharmacist/dashboard" element={<PharmacistDashboard />} />
        <Route path="health-management/employee" element={<EmployeePortalPage />} />
        <Route path="health-management/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="health-management/memberships" element={<MembershipsPage />} />
        <Route path="health-management/memberships/add" element={<AddMembershipPage />} />
        <Route path="health-management/records" element={<HealthRecordsPage />} />
        <Route path="health-management/records/add" element={<AddHealthRecordPage />} />
        <Route path="health-management/doctors" element={<DoctorsPage />} />
        <Route path="health-management/stock" element={<MedicalStockPage />} />
        <Route path="health-management/stock/add" element={<AddStockPage />} />
        <Route path="health-management/prescriptions" element={<PrescriptionsPage />} />
        <Route path="health-management/prescriptions/add" element={<AddPrescriptionPage />} />
        <Route path="health-management/dispensary" element={<DispensaryPage />} />
        <Route path="health-management/dispensary/add" element={<ComingSoon />} />
        <Route path="health-management/appointments" element={<AppointmentsPage />} />
        <Route path="health-management/appointments/add" element={<AddAppointmentPage />} />
        <Route path="health-management/guest-users" element={<GuestUsersPage />} />
        <Route path="health-management/guest-users/add" element={<AddGuestUserPage />} />
        <Route path="health-management/reports" element={<ReportsPage />} />
        <Route path="health-management/subscriptions" element={<SubscriptionsPage />} />
        <Route path="health-management/subscriptions/add" element={<AddSubscriptionPage />} />
      </Routes>
    </AppLayout>
  )
}
