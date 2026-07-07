import { FormPage, PortalSelector } from '@/shared/new-components'
import { getPortalTiles } from '@/features/health-management/data'

export default function EmployeePortalPage() {
  const tiles = getPortalTiles('employee-health')

  return (
    <FormPage
      title="Employee Portal"
      description="Self-service health management"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Employee Portal' },
      ]}
    >
      <PortalSelector tiles={tiles} />
    </FormPage>
  )
}
