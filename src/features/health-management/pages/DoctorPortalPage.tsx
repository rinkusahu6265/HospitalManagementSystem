import { FormPage, PortalSelector } from '@/shared/new-components'
import { getPortalTiles } from '@/features/health-management/data'

export default function DoctorPortalPage() {
  const tiles = getPortalTiles('health_doctor')

  return (
    <FormPage
      title="Doctor Portal"
      description="Clinical dashboard"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Doctor Portal' },
      ]}
    >
      <PortalSelector tiles={tiles} />
    </FormPage>
  )
}
