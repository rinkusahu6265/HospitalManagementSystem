import { FormPage, FormCard, StatusBadge } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import { mockMembershipTypes } from '@/features/health-management/core/mockData';
import { CardGrid } from '@/shared/cards';

export default function SubscriptionsPage() {
  return (
    <FormPage
      title="Subscriptions"
      description="Manage health plans and subscriptions"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Subscriptions' },
      ]}
      headerAction={
        <LinkButton to="/health-management/subscriptions/add" variant="primary">
          Add Subscription
        </LinkButton>
      }
    >
      <FormCard>
        <CardGrid
          searchable
          searchFields={['name', 'memberType', 'healthCenter']}
          data={mockMembershipTypes}
          renderCard={(item: any) => (
            <div key={item.membershipTypeId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-violet-200 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-credit-card text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500 font-medium">ID: {item.membershipTypeId}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 md:w-1/2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    {item.memberType}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-building text-slate-400" />
                  <span className="font-medium truncate max-w-[120px]">{item.healthCenter}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-wallet text-slate-400" />
                  <span className="font-medium">
                    ${item.feeAmount} <span className="text-xs text-slate-400">({item.validityType})</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 md:w-1/6">
                <StatusBadge variant={item.status === 'Active' ? 'approved' : 'rejected'} label={item.status} />
                <button className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors shrink-0">
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
