import { FormPage, FormCard } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import { mockHealthRecords } from '@/features/health-management/data';
import { CardGrid } from '@/shared/cards';

export default function HealthRecordsPage() {
  return (
    <FormPage
      title="Health Records"
      description="View all patient health records"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Health Records' },
      ]}
      headerAction={
        <LinkButton to="/health-management/records/add" variant="primary">
          Add Health Record
        </LinkButton>
      }
    >
      <FormCard>
        <CardGrid
          searchable
          searchFields={['memberName', 'healthCenter', 'createdBy']}
          data={mockHealthRecords}
          renderCard={(item: any) => (
            <div key={item.recordId} className="group flex flex-col lg:flex-row lg:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-purple-200 transition-all">
              <div className="flex items-center gap-4 mb-4 lg:mb-0 lg:w-1/4">
                <div className="w-10 h-10 rounded-full bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-user text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{item.memberName}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 font-medium">
                    <i className="pi pi-droplet text-red-400" />
                    <span>{item.bloodGroup}</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/6 flex flex-col justify-center gap-1 text-sm text-slate-600 mb-4 lg:mb-0">
                <div className="flex items-center gap-2">
                  <i className="pi pi-calendar text-slate-400" />
                  <span className="font-medium">{item.dateOfVisit}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <i className="pi pi-clock text-slate-400" />
                  <span>{item.timeOfVisit}</span>
                </div>
              </div>

              <div className="lg:w-2/5 flex items-start gap-2 text-sm text-slate-600 mb-4 lg:mb-0 pr-4">
                <i className="pi pi-info-circle text-slate-400 mt-0.5 shrink-0" />
                <span className="line-clamp-2" title={item.chiefComplaint}>{item.chiefComplaint}</span>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-6 mt-2 lg:mt-0 lg:w-1/6">
                <div className="flex flex-col items-start lg:items-end gap-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <i className="pi pi-user-md text-slate-400" />
                    <span className="font-semibold">{item.createdBy}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <i className="pi pi-building text-slate-400" />
                    <span className="truncate max-w-[120px]">{item.healthCenter}</span>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors shrink-0">
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
