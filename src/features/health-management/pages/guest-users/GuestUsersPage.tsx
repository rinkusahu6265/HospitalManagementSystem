import { FormPage, FormCard, StatusBadge } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import { CardGrid } from '@/shared/cards';
import { mockGuestUsers } from '@/features/health-management/data';

export default function GuestUsersPage() {
  return (
    <FormPage
      title="Guest Users"
      description="Manage external guest users"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Guest Users' },
      ]}
      headerAction={
        <LinkButton to="/health-management/guest-users/add" variant="primary">
          Add Guest User
        </LinkButton>
      }
    >
      <FormCard>
        <CardGrid
          searchable
          searchFields={['name', 'email', 'mobile']}
          data={mockGuestUsers}
          renderCard={(item: any) => (
            <div key={item.guestId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-cyan-200 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-user-plus text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500 font-medium">ID: {item.guestId}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 md:w-1/2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-envelope text-slate-400" />
                  <span className="font-medium">{item.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-phone text-slate-400" />
                  <span className="font-medium">{item.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-600 border border-purple-100">{item.gender}</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">{item.bloodGroup}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 md:w-1/6">
                <StatusBadge variant={item.status === 'Active' ? 'approved' : 'rejected'} label={item.status} />
                <button className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors shrink-0">
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
