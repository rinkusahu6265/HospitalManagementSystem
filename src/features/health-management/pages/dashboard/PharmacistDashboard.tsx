import { FormPage, FormCard } from '@/shared/new-components'
import { mockMedicalStock } from '@/features/health-management/data'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts'

export default function PharmacistDashboard() {
  const kpis = [
    { value: mockMedicalStock.length, label: 'Total Stock Items', color: 'bg-blue-500', icon: 'pi-box' },
    { value: mockMedicalStock.filter(s => s.quantity < 50).length, label: 'Low Stock', color: 'bg-orange-500', icon: 'pi-exclamation-triangle' },
  ]

  const dispenseData = [
    { month: 'Jan', count: 120 },
    { month: 'Feb', count: 140 },
    { month: 'Mar', count: 90 },
    { month: 'Apr', count: 180 },
    { month: 'May', count: 210 },
  ]

  return (
    <FormPage
      title="Pharmacy Dashboard"
      description="Overview of dispensary operations"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Pharmacist Portal', url: '/health-management/pharmacist' },
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
        <FormCard title="Medicines Dispensed (Trend)" icon="pi-chart-line">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dispenseData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="count" name="Items Dispensed" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </FormCard>
      </div>
    </FormPage>
  )
}
