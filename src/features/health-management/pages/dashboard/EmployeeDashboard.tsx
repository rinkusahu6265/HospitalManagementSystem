import { FormPage, FormCard, StatusBadge } from '@/shared/new-components'
import { LinkButton } from '@/shared/components/buttons'
import { CardGrid } from '@/shared/cards'
import {
  mockAppointments, mockHealthRecords, mockMemberships
} from '@/features/health-management/data'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts'

export default function EmployeeDashboard() {
  const statusVariant: Record<string, 'approved' | 'pending' | 'rejected'> = {
    Scheduled: 'pending',
    Completed: 'approved',
    Cancelled: 'rejected',
  }

  const kpis = [
    { value: mockAppointments.length, label: 'Total Appointments', color: 'bg-blue-500', icon: 'pi-calendar' },
    { value: mockAppointments.filter(a => a.status === 'Scheduled').length, label: 'Upcoming', color: 'bg-green-500', icon: 'pi-clock' },
    { value: mockHealthRecords.length, label: 'Health Records', color: 'bg-purple-500', icon: 'pi-file' },
    { value: mockMemberships.length, label: 'Active Memberships', color: 'bg-amber-500', icon: 'pi-users' },
  ]

  // Mock health metric data for the line chart
  const healthTrends = [
    { month: 'Jan', bp: 120, heartRate: 72 },
    { month: 'Feb', bp: 118, heartRate: 75 },
    { month: 'Mar', bp: 122, heartRate: 70 },
    { month: 'Apr', bp: 119, heartRate: 74 },
    { month: 'May', bp: 115, heartRate: 68 },
    { month: 'Jun', bp: 117, heartRate: 71 },
  ]

  return (
    <FormPage
      title="My Health Dashboard"
      description="Your personal health overview"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Employee Portal', url: '/health-management/employee' },
        { label: 'Dashboard' },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl ${kpi.color} bg-opacity-10 flex items-center justify-center shrink-0`}>
              <i className={`pi ${kpi.icon} text-xl ${kpi.color.replace('bg-', 'text-')}`} />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{kpi.value}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{kpi.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <FormCard title="Health Trends (Past 6 Months)" icon="pi-chart-line">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthTrends} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} domain={['dataMin - 10', 'dataMax + 10']} />
                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="bp" name="Systolic BP" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="heartRate" name="Heart Rate (bpm)" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </FormCard>
      </div>

      <FormCard title="My Appointments" icon="pi-calendar">
        <CardGrid
          data={mockAppointments}
          renderCard={(item: any) => (
            <div key={item.appointmentId} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="pi pi-user text-sm text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.doctorName}</p>
                  <p className="text-xs text-gray-400">{item.speciality}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500"><i className="pi pi-calendar mr-1" />{item.date}</span>
                <span className="text-xs text-gray-500"><i className="pi pi-clock mr-1" />{item.timeSlot}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <span className="text-xs text-gray-400">{item.healthCenter}</span>
                <StatusBadge variant={statusVariant[item.status] || 'neutral'} label={item.status} />
              </div>
            </div>
          )}
        />
      </FormCard>

      <FormCard title="Recent Health Records" icon="pi-file">
        <CardGrid
          data={mockHealthRecords.slice(0, 5)}
          renderCard={(item: any) => (
            <div key={item.recordId} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className="pi pi-user text-sm text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">{item.memberName}</p>
              </div>
              <p className="text-xs text-gray-500 mb-1">{item.dateOfVisit}</p>
              <p className="text-xs text-gray-400 line-clamp-2">{item.chiefComplaint}</p>
            </div>
          )}
        />
      </FormCard>

      <div className="mt-4">
        <LinkButton to="/health-management/appointments/add" variant="primary">
          <i className="pi pi-plus mr-2" />Book Appointment
        </LinkButton>
      </div>
    </FormPage>
  )
}
