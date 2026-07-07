import { FormPage, FormCard } from '@/shared/new-components';
import { Button } from '@/shared/components/buttons';
import {
  mockMemberships,
  mockHealthRecords,
  mockMedicalStock,
  mockAppointments,
  mockDoctors,
} from '@/features/health-management/data';

const lowStockThreshold = 50;
const outOfStockThreshold = 0;

export default function ReportsPage() {
  const totalMemberships = mockMemberships.length;
  const totalRecords = mockHealthRecords.length;
  const totalAppointments = mockAppointments.length;
  const totalDoctors = mockDoctors.length;
  const totalStock = mockMedicalStock.length;
  const lowStock = mockMedicalStock.filter(
    (s) => s.quantity > outOfStockThreshold && s.quantity < lowStockThreshold
  ).length;
  const outOfStock = mockMedicalStock.filter((s) => s.quantity <= outOfStockThreshold).length;
  const activeMemberships = mockMemberships.filter((m) => m.validTill === 'Lifetime').length;

  const kpis = [
    { label: 'Total Memberships', value: totalMemberships, color: 'bg-blue-500' },
    { label: 'Health Records', value: totalRecords, color: 'bg-green-500' },
    { label: 'Appointments', value: totalAppointments, color: 'bg-purple-500' },
    { label: 'Doctors', value: totalDoctors, color: 'bg-indigo-500' },
    { label: 'Stock Items', value: totalStock, color: 'bg-teal-500' },
    { label: 'Low Stock', value: lowStock, color: 'bg-yellow-500' },
    { label: 'Out of Stock', value: outOfStock, color: 'bg-red-500' },
    { label: 'Active Memberships', value: activeMemberships, color: 'bg-cyan-500' },
  ];

  return (
    <FormPage
      title="Reports"
      description="Health center analytics and reports"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Reports' },
      ]}
    >
      <FormCard>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-lg shadow-sm border p-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${kpi.color}`} />
                <div>
                  <p className="text-sm text-gray-500">{kpi.label}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FormCard>

      <div className="flex gap-4 mt-6">
        <Button variant="primary" onClick={() => alert('Export feature coming soon')}>
          Export Memberships
        </Button>
        <Button variant="outlined" onClick={() => alert('Export feature coming soon')}>
          Export Health Records
        </Button>
        <Button variant="success" onClick={() => alert('Export feature coming soon')}>
          Export Stock
        </Button>
        <Button variant="info" onClick={() => alert('Export feature coming soon')}>
          Export Prescriptions
        </Button>
        <Button variant="warning" onClick={() => alert('Export feature coming soon')}>
          Export Appointments
        </Button>
        <Button variant="outlined" onClick={() => alert('Export feature coming soon')}>
          Export Subscriptions
        </Button>
      </div>
    </FormPage>
  );
}
