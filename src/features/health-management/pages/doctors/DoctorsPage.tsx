import { FormPage, FormCard, StatusBadge } from '@/shared/new-components';
import { CardGrid } from '@/shared/cards';
import { mockDoctors } from '@/features/health-management/data';

export default function DoctorsPage() {
  return (
    <FormPage
      title="Doctor Schedule"
      description="View doctor availability and schedules"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Doctors' },
      ]}
    >
      <FormCard>
        <CardGrid
          searchable
          searchFields={['name', 'speciality', 'hospital']}
          data={mockDoctors}
          renderCard={(item: any) => (
            <div key={item.doctorId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-user text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{item.speciality}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 md:w-1/2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-building text-slate-400" />
                  <span className="font-medium truncate max-w-[120px]">{item.hospital}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-clock text-slate-400" />
                  <span className="font-medium">{item.visitingHoursStart} - {item.visitingHoursEnd}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-calendar text-slate-400" />
                  <span className="font-medium">{item.visitingDays}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 md:w-1/6">
                <StatusBadge variant={item.visitingStatus === 'Available' ? 'approved' : 'rejected'} label={item.visitingStatus} />
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors shrink-0">
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
