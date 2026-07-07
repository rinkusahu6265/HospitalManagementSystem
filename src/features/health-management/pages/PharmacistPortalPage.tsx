import { FormPage, PortalSelector } from '@/shared/new-components'
import { getPortalTiles } from '@/features/health-management/data'

export default function PharmacistPortalPage() {
  const tiles = getPortalTiles('health_pharmacist')

  return (
    <FormPage
      title="Pharmacist Portal"
      description="Pharmacy management"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Pharmacist Portal' },
      ]}
    >
      <PortalSelector tiles={tiles} />
    </FormPage>
  )
}
