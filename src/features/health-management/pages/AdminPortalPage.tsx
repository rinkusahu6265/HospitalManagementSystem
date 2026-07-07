import { FormPage, PortalSelector } from '@/shared/new-components'
import { getPortalTiles } from '@/features/health-management/data'

export default function AdminPortalPage() {
  const tiles = getPortalTiles('health_admin')

  return (
    <FormPage
      title="Admin Portal"
      description="Full control health management dashboard"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Admin Portal' },
      ]}
    >
      <PortalSelector tiles={tiles} />
    </FormPage>
  )
}
