import { FormPage, PortalSelector } from '@/shared/new-components'

const portalTiles = [
  { icon: 'shield', title: 'Admin Portal', description: 'Full control health management dashboard', color: 'border-blue-500', to: '/health-management/admin' },
  { icon: 'user', title: 'Doctor Portal', description: 'Clinical dashboard', color: 'border-green-500', to: '/health-management/doctor' },
  { icon: 'box', title: 'Pharmacist Portal', description: 'Pharmacy management', color: 'border-purple-500', to: '/health-management/pharmacist' },
  { icon: 'users', title: 'Employee Portal', description: 'Self-service health management', color: 'border-orange-500', to: '/health-management/employee' },
]

export default function HealthPortalPage() {
  return (
    <FormPage
      title="Health Management System"
      description="Select your portal to continue"
      breadcrumbs={[{ label: 'Health Management', url: '/health-management' }]}
    >
      <PortalSelector tiles={portalTiles} />
    </FormPage>
  )
}
