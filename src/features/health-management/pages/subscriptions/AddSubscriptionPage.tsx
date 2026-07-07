import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormCard, FormGrid } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import Button from '@/shared/components/buttons/Button';
import TextBox from '@/shared/components/forms/TextBox';
import DropDownList from '@/shared/components/forms/DropDownList';

export default function AddSubscriptionPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    memberType: '',
    healthCenter: '',
    validityType: '',
    feeAmount: '',
    benefits: '',
    status: 'Active',
  });

  const handleChange = (field: string) => (value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    navigate('/health-management/subscriptions');
  };

  const memberTypeOptions = [
    { label: 'Employee', value: 'Employee' },
    { label: 'Student', value: 'Student' },
    { label: 'Guest', value: 'Guest' },
  ];

  const healthCenterOptions = [
    { label: 'Main Campus Health Center', value: 'Main Campus' },
    { label: 'Engineering Block Clinic', value: 'Engineering Block' },
    { label: 'Admin Block Clinic', value: 'Admin Block' },
    { label: 'All Centers', value: 'All Centers' },
  ];

  const validityOptions = [
    { label: 'Lifetime', value: 'Lifetime' },
    { label: 'Valid Till Date', value: 'Valid Till' },
    { label: 'Superannuation', value: 'Superannuation' },
  ];

  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
  ];

  return (
    <FormPage
      title="Add Subscription Plan"
      description="Create a new health plan or subscription package"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Subscriptions', url: '/health-management/subscriptions' },
        { label: 'Add Subscription' },
      ]}
      headerAction={
        <div className="flex gap-3">
          <LinkButton to="/health-management/subscriptions" variant="outlined">
            Cancel
          </LinkButton>
          <Button variant="primary" onClick={handleSave}>
            Save Plan
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSave} className="space-y-6">
        <FormCard title="Plan Details" icon="pi-credit-card">
          <FormGrid>
            <TextBox
              label="Plan Name"
              value={formData.name}
              onChange={handleChange('name')}
              placeholder="e.g. Premium Family Plan"
            />
            
            <DropDownList
              label="Target Member Type"
              value={formData.memberType}
              onChange={handleChange('memberType')}
              dataSource={memberTypeOptions}
              textField="label"
              placeholder="Select member type"
            />

            <DropDownList
              label="Applicable Health Center"
              value={formData.healthCenter}
              onChange={handleChange('healthCenter')}
              dataSource={healthCenterOptions}
              textField="label"
              placeholder="Select health center"
            />

            <DropDownList
              label="Validity Type"
              value={formData.validityType}
              onChange={handleChange('validityType')}
              dataSource={validityOptions}
              textField="label"
              placeholder="Select validity"
            />

            <TextBox
              label="Fee Amount ($)"
              type="number"
              value={formData.feeAmount}
              onChange={handleChange('feeAmount')}
              placeholder="Enter fee amount"
            />

            <DropDownList
              label="Status"
              value={formData.status}
              onChange={handleChange('status')}
              dataSource={statusOptions}
              textField="label"
              placeholder="Select status"
            />

            <div className="md:col-span-2">
              <TextBox
                label="Benefits & Description"
                value={formData.benefits}
                onChange={handleChange('benefits')}
                placeholder="List the benefits covered under this plan..."
              />
            </div>
          </FormGrid>
        </FormCard>
      </form>
    </FormPage>
  );
}
