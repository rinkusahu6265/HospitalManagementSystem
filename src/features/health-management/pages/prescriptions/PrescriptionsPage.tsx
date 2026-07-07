import { FormPage, FormCard } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import { CardGrid } from '@/shared/cards';
import { mockPrescriptions } from '@/features/health-management/data';

export default function PrescriptionsPage() {
  return (
    <FormPage
      title="Prescriptions"
      description="Manage patient prescriptions"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Prescriptions' },
      ]}
      headerAction={
        <LinkButton to="/health-management/prescriptions/add" variant="primary">
          Add Prescription
        </LinkButton>
      }
    >
      <FormCard>
        <CardGrid
          searchable
          searchFields={['patientName', 'prescribedBy']}
          data={mockPrescriptions}
          renderCard={(item: any) => (
            <div key={item.prescriptionId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-teal-200 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-file text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.patientName}</p>
                  <p className="text-xs text-slate-500 font-medium">ID: {item.prescriptionId}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 md:w-1/2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-user-md text-slate-400" />
                  <span className="font-medium">{item.prescribedBy}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-calendar text-slate-400" />
                  <span className="font-medium">{item.prescribedOn}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-pill text-teal-400" />
                  <span className="font-medium">{item.items.length} {item.items.length === 1 ? 'item' : 'items'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 md:w-1/6">
                <button className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors shrink-0">
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
