import { useState } from 'react'
import { FormPage, Tabs, StatusBadge } from '@/shared/new-components'
import { Button } from '@/shared/components/buttons'
import { Switch } from '@/shared/components/forms'
import { ToastProvider, useToast } from '@/services'
import { CardGrid } from '@/shared/cards'
import {
  mockMembershipTypes, mockUnitTypes, mockFacilities,
  mockAffiliatedHospitals, mockDoctorSpecialities, mockDoctors,
  mockReferralTemplates, mockMedicineSalts, mockBrands,
  mockCompanies, mockStockTypes, mockPrescriptionCodes
} from '@/features/health-management/data'

function SaveSettingsBtn() {
  const toast = useToast()
  return <Button variant="primary" onClick={() => toast.success('Settings saved successfully')}>Save Settings</Button>
}

export default function AdminSettings() {
  const [subscribedOnly, setSubscribedOnly] = useState(true)
  const [expiryNotification, setExpiryNotification] = useState(false)
  const [showSignature, setShowSignature] = useState(false)

  const statusBadge = (status: string) => {
    const variantMap: Record<string, 'approved' | 'rejected'> = {
      Active: 'approved',
      Inactive: 'rejected',
    }
    return <StatusBadge variant={variantMap[status] || 'neutral'} label={status} />
  }

  const tabs = [
    {
      title: 'Membership',
      content: (
        <div className="space-y-4">
          <div className="flex gap-6">
            <Switch label="Subscribed Members Only" checked={subscribedOnly} onChange={setSubscribedOnly} />
            <Switch label="Auto Expiry Notification" checked={expiryNotification} onChange={setExpiryNotification} />
          </div>
          <CardGrid
            data={mockMembershipTypes}
            renderCard={(item: any) => (
              <div key={item.membershipTypeId} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                    <i className="pi pi-shield text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.memberType}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Fee: <span className="font-semibold text-gray-700">${item.feeAmount}</span></span>
                  {statusBadge(item.status)}
                </div>
              </div>
            )}
          />
          <SaveSettingsBtn />
        </div>
      ),
    },
    {
      title: 'Health Center',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Unit Types</h4>
            <CardGrid
              data={mockUnitTypes}
              renderCard={(item: any) => (
                <div key={item.name} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              )}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Facilities</h4>
            <CardGrid
              data={mockFacilities}
              renderCard={(item: any) => (
                <div key={item.name} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              )}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Affiliated Hospitals</h4>
            <CardGrid
              data={mockAffiliatedHospitals}
              renderCard={(item: any) => (
                <div key={item.name} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.address}</p>
                  <p className="text-xs text-gray-400">{item.contact}</p>
                </div>
              )}
            />
          </div>
          <SaveSettingsBtn />
        </div>
      ),
    },
    {
      title: 'Doctor',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Specialities</h4>
            <CardGrid
              data={mockDoctorSpecialities}
              renderCard={(item: any) => (
                <div key={item.name} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              )}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Doctors</h4>
            <CardGrid
              data={mockDoctors}
              renderCard={(item: any) => {
                const variantMap: Record<string, 'approved' | 'rejected'> = {
                  Available: 'approved',
                  Unavailable: 'rejected',
                }
                return (
                  <div key={item.doctorId} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
                        <i className="pi pi-user text-sm text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.speciality}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{item.hospital}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">{item.visitingHoursStart} - {item.visitingHoursEnd}</span>
                      <StatusBadge variant={variantMap[item.visitingStatus] || 'neutral'} label={item.visitingStatus} />
                    </div>
                  </div>
                )
              }}
            />
          </div>
          <SaveSettingsBtn />
        </div>
      ),
    },
    {
      title: 'Referral',
      content: (
        <div className="space-y-4">
          <CardGrid
            data={mockReferralTemplates}
            renderCard={(item: any) => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                  {statusBadge(item.status)}
                </div>
                <p className="text-xs text-gray-400 line-clamp-2">{item.body}</p>
              </div>
            )}
          />
          <SaveSettingsBtn />
        </div>
      ),
    },
    {
      title: 'Medicine',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Medicine Salts</h4>
            <CardGrid
              data={mockMedicineSalts}
              renderCard={(item: any) => (
                <div key={item.saltName} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.saltName}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              )}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Brands</h4>
            <CardGrid
              data={mockBrands}
              renderCard={(item: any) => (
                <div key={item.brandName} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.brandName}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.companyName}</p>
                </div>
              )}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Companies</h4>
            <CardGrid
              data={mockCompanies}
              renderCard={(item: any) => (
                <div key={item.companyName} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.companyName}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              )}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Stock Types</h4>
            <CardGrid
              data={mockStockTypes}
              renderCard={(item: any) => (
                <div key={item.stockTypeName} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800">{item.stockTypeName}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              )}
            />
          </div>
          <SaveSettingsBtn />
        </div>
      ),
    },
    {
      title: 'Prescription',
      content: (
        <div className="space-y-4">
          <CardGrid
            data={mockPrescriptionCodes}
            renderCard={(item: any) => (
              <div key={item.code} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-gray-800">{item.code}</p>
                <p className="text-xs text-gray-400">{item.description}</p>
                <p className="text-xs text-gray-400">Dose: {item.dose}</p>
              </div>
            )}
          />
          <Switch label="Show Signature on Prescription" checked={showSignature} onChange={setShowSignature} />
          <SaveSettingsBtn />
        </div>
      ),
    },
  ]

  return (
    <ToastProvider>
      <FormPage
        title="System Settings"
        description="Configure health management system"
        breadcrumbs={[
          { label: 'Health Management', url: '/health-management' },
          { label: 'Admin Portal', url: '/health-management/admin' },
          { label: 'Settings' },
        ]}
      >
        <Tabs tabs={tabs} />
      </FormPage>
    </ToastProvider>
  )
}
