import { FormPage, FormCard, StatusBadge } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import { mockAppointments } from '@/features/health-management/data';
import { CardGrid } from '@/shared/cards';

const statusVariant: Record<string, 'approved' | 'pending' | 'rejected'> = {
  Scheduled: 'pending',
  Completed: 'approved',
  Cancelled: 'rejected',
};

export default function AppointmentsPage() {
  return (
    <FormPage
      title="Appointments"
      description="View and manage appointments"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Appointments' },
      ]}
      headerAction={
        <LinkButton to="/health-management/appointments/add" variant="primary">
          Book Appointment
        </LinkButton>
      }
    >
      <FormCard>
        <CardGrid
          searchable
          searchFields={['memberName', 'doctorName', 'speciality']}
          data={mockAppointments}
          renderCard={(item: any) => (
            <div key={item.appointmentId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-pink-200 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-calendar text-pink-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.memberName}</p>
                  <p className="text-xs text-slate-500 font-medium">{item.doctorName} <span className="text-slate-300 mx-1">|</span> {item.speciality}</p>
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
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <i className="pi pi-building text-slate-400" />
                  <span className="truncate max-w-[120px]">{item.healthCenter}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 md:w-1/6">
                <StatusBadge variant={statusVariant[item.status] || 'neutral'} label={item.status} />
                <button className="p-2 text-slate-400 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors shrink-0">
                  <i className="pi pi-chevron-right text-sm" />
                </button>
              </div>
            </div>
          )}
        />
      </FormCard>
    </FormPage>
  );
}
