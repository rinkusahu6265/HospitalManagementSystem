import { useState } from 'react';
import { FormPage, FormCard, Modal, StatusBadge } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import { mockMemberships } from '@/features/health-management/data';
import { CardGrid } from '@/shared/cards';

export default function MembershipsPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <FormPage
      title="Memberships"
      description="Manage all health plan memberships"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Memberships' },
      ]}
      headerAction={
        <LinkButton to="/health-management/memberships/add" variant="primary">
          Add Membership
        </LinkButton>
      }
    >
      <FormCard>
        <CardGrid
          searchable
          searchFields={['memberName', 'memberType', 'healthCenter']}
          data={mockMemberships}
          renderCard={(item: any) => (
            <div key={item.memberId} className="group flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md hover:border-green-200 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-green-50 group-hover:bg-green-100 flex items-center justify-center shrink-0 transition-colors">
                  <i className="pi pi-users text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.memberName}</p>
                  <p className="text-xs text-slate-500 font-medium">Plan: {item.membershipTypeId}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 md:w-1/2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100">{item.memberType}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-building text-slate-400" />
                  <span className="font-medium truncate max-w-[120px]">{item.healthCenter}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <i className="pi pi-calendar text-slate-400" />
                  <span className="font-medium flex items-center gap-1.5">
                    {item.validFrom} <i className="pi pi-arrow-right text-[10px] text-slate-300" /> {item.validTill === 'Lifetime' ? <StatusBadge variant="approved" label="Lifetime" /> : item.validTill}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 md:w-1/6">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                  <i className="pi pi-users text-slate-400" />
                  <span>{item.dependents} Dep.</span>
                </div>
                <button 
                  onClick={() => setSelectedMember(item)}
                  className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors shrink-0"
                >
                  <i className="pi pi-chevron-right text-sm" />
                </button>
              </div>
            </div>
          )}
        />
      </FormCard>

      <Modal 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)}
        title="Membership Details"
      >
        {selectedMember && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <i className="pi pi-user text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{selectedMember.memberName}</h3>
                <p className="text-sm text-slate-500">{selectedMember.memberId}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500 font-medium">Plan Type</p>
                <p className="text-sm font-semibold text-slate-800">{selectedMember.membershipTypeId}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Member Type</p>
                <p className="text-sm font-semibold text-slate-800">{selectedMember.memberType}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Health Center</p>
                <p className="text-sm font-semibold text-slate-800">{selectedMember.healthCenter}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Dependents</p>
                <p className="text-sm font-semibold text-slate-800">{selectedMember.dependents}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Valid From</p>
                <p className="text-sm font-semibold text-slate-800">{selectedMember.validFrom}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Valid Till</p>
                <div className="text-sm font-semibold text-slate-800">
                  {selectedMember.validTill === 'Lifetime' ? <StatusBadge variant="approved" label="Lifetime" /> : selectedMember.validTill}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </FormPage>
  );
}
