import { FormPage, FormCard, StatusBadge } from '@/shared/new-components'
import { CardGrid } from '@/shared/cards'
import {
  mockMemberships, mockHealthRecords, mockAppointments,
  mockDoctors, mockMedicalStock
} from '@/features/health-management/data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

export default function AdminDashboard() {
  const lowStock = mockMedicalStock.filter(s => s.quantity < 50 && s.quantity > 0).length
  const outOfStock = mockMedicalStock.filter(s => s.quantity === 0).length

  const kpis = [
    { value: mockMemberships.length, label: 'Total Memberships', color: 'bg-blue-500', icon: 'pi-id-card' },
    { value: mockHealthRecords.length, label: 'Health Records', color: 'bg-purple-500', icon: 'pi-file' },
    { value: mockAppointments.length, label: 'Appointments', color: 'bg-pink-500', icon: 'pi-calendar' },
    { value: mockDoctors.length, label: 'Doctors', color: 'bg-indigo-500', icon: 'pi-user' },
    { value: mockMedicalStock.length, label: 'Stock Items', color: 'bg-yellow-500', icon: 'pi-box' },
    { value: lowStock, label: 'Low Stock', color: 'bg-orange-500', icon: 'pi-exclamation-triangle' },
    { value: outOfStock, label: 'Out of Stock', color: 'bg-red-500', icon: 'pi-box' },
    { value: mockMemberships.length, label: 'Active Memberships', color: 'bg-green-500', icon: 'pi-check-circle' },
  ]

  const statusVariant: Record<string, 'approved' | 'pending' | 'rejected'> = {
    Scheduled: 'pending',
    Completed: 'approved',
    Cancelled: 'rejected',
  }

  // Chart Data Preparation
  const stockChartData = mockMedicalStock.slice(0, 5).map(s => ({
    name: s.saltName,
    quantity: s.quantity
  }))

  const typeCounts = mockMemberships.reduce((acc, curr) => {
    acc[curr.memberType] = (acc[curr.memberType] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const membershipPieData = Object.entries(typeCounts).map(([name, value]) => ({ name, value }))
  const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <FormPage
      title="Admin Dashboard"
      description="Health center overview and key metrics"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Admin Portal', url: '/health-management/admin' },
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <FormCard title="Medical Stock Levels (Top 5)" icon="pi-chart-bar">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <RechartsTooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="quantity" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </FormCard>

        <FormCard title="Memberships by Type" icon="pi-chart-pie">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={membershipPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {membershipPieData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </FormCard>
      </div>

      <FormCard title="Recent Health Records" icon="pi-file">
        <CardGrid
          data={mockHealthRecords.slice(0, 5)}
          renderCard={(item: any) => (
            <div key={item.recordId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-purple-200 transition-all">
              <div className="flex items-center gap-4 mb-3 md:mb-0 md:w-1/4">
                <div className="w-10 h-10 rounded-full bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-user text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.memberName}</p>
                  <p className="text-xs text-slate-500 font-medium">Record ID: {item.recordId}</p>
                </div>
              </div>

              <div className="md:w-1/6 flex items-center gap-2 text-sm text-slate-600 mb-2 md:mb-0">
                <i className="pi pi-calendar text-slate-400" />
                <span className="font-medium">{item.dateOfVisit} {item.timeOfVisit}</span>
              </div>

              <div className="md:w-5/12 flex items-start gap-2 text-sm text-slate-600 mb-3 md:mb-0 pr-4">
                <i className="pi pi-info-circle text-slate-400 mt-0.5 shrink-0" />
                <span className="line-clamp-2">{item.chiefComplaint}</span>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-3 mt-2 md:mt-0 md:w-1/6">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                  <i className="pi pi-user-md text-slate-400" />
                  <span className="truncate max-w-[80px]">{item.createdBy}</span>
                </div>
                <button className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                  <i className="pi pi-chevron-right text-sm" />
                </button>
              </div>
            </div>
          )}
        />
      </FormCard>

      <FormCard title="Upcoming Appointments" icon="pi-calendar">
        <CardGrid
          data={mockAppointments.filter(a => a.status === 'Scheduled')}
          renderCard={(item: any) => (
            <div key={item.appointmentId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-pink-200 transition-all">
              <div className="flex items-center gap-4 mb-3 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-calendar text-pink-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.memberName}</p>
                  <p className="text-xs text-slate-500 font-medium">with {item.doctorName}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 md:w-1/2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-calendar text-slate-400" />
                  <span className="font-medium">{item.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-clock text-slate-400" />
                  <span className="font-medium">{item.timeSlot}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 mt-3 md:mt-0 md:w-1/6">
                <StatusBadge variant={statusVariant[item.status] || 'neutral'} label={item.status} />
                <button className="p-2 text-slate-400 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <i className="pi pi-chevron-right text-sm" />
                </button>
              </div>
            </div>
          )}
        />
      </FormCard>
    </FormPage>
  )
}
