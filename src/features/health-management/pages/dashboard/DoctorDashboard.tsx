import { FormPage, FormCard, StatusBadge } from '@/shared/new-components'
import { CardGrid } from '@/shared/cards'
import { mockAppointments, mockHealthRecords, mockMemberships } from '@/features/health-management/data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts'

export default function DoctorDashboard() {
  const kpis = [
    { value: mockAppointments.filter(a => a.status === 'Scheduled').length, label: 'Today\'s Appointments', color: 'bg-blue-500', icon: 'pi-calendar' },
    { value: mockHealthRecords.length, label: 'Health Records', color: 'bg-green-500', icon: 'pi-file' },
    { value: mockMemberships.length, label: 'Total Patients', color: 'bg-purple-500', icon: 'pi-users' },
    { value: mockAppointments.filter(a => a.status === 'Completed').length, label: 'Consultations Completed', color: 'bg-amber-500', icon: 'pi-check-circle' },
  ]

  const appointmentData = [
    { day: 'Mon', count: 5 },
    { day: 'Tue', count: 8 },
    { day: 'Wed', count: 3 },
    { day: 'Thu', count: 7 },
    { day: 'Fri', count: 6 },
  ]

  return (
    <FormPage
      title="Doctor Dashboard"
      description="Overview of your schedule and patients"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Doctor Portal', url: '/health-management/doctor' },
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
        <FormCard title="Appointments This Week" icon="pi-chart-bar">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appointmentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <RechartsTooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </FormCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <FormCard title="Today's Schedule" icon="pi-clock">
          <CardGrid
            data={mockAppointments.filter(a => a.status === 'Scheduled').slice(0, 4)}
            renderCard={(item: any) => (
              <div key={item.appointmentId} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <i className="pi pi-user text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{item.memberName}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <i className="pi pi-clock" />
                      <span>{item.timeSlot}</span>
                    </div>
                  </div>
                </div>
                <StatusBadge variant="pending" label="Scheduled" />
              </div>
            )}
          />
        </FormCard>

        <FormCard title="Recent Patient Records" icon="pi-file-edit">
          <CardGrid
            data={mockHealthRecords.slice(0, 4)}
            renderCard={(item: any) => (
              <div key={item.recordId} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <i className="pi pi-file text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{item.memberName}</h4>
                    <p className="text-xs text-slate-500 mt-1 truncate max-w-[200px]">{item.chiefComplaint}</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <i className="pi pi-chevron-right" />
                </button>
              </div>
            )}
          />
        </FormCard>
      </div>
    </FormPage>
  )
}
