import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormCard, FormGrid } from '@/shared/new-components';
import { TextBox, DropDownList } from '@/shared/components/forms';
import { Button, LinkButton } from '@/shared/components/buttons';
import { mockMembershipTypes } from '@/features/health-management/data';

export default function AddMembershipPage() {
  const navigate = useNavigate();

  const [memberType, setMemberType] = useState('');
  const [memberName, setMemberName] = useState('');
  const [memberId, setMemberId] = useState('');
  const [program, setProgram] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [membershipPlan, setMembershipPlan] = useState('');
  const [healthCenter, setHealthCenter] = useState('');
  const [membershipDate, setMembershipDate] = useState('');
  const [validFrom, setValidFrom] = useState('');

  const handleSave = () => {
    navigate('/health-management/memberships');
  };

  return (
    <FormPage
      title="Add Membership"
      description="Register a new health plan member"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Memberships', url: '/health-management/memberships' },
        { label: 'Add Membership' },
      ]}
    >
      <FormCard title="Membership Information">
        <FormGrid columns={2}>
          <DropDownList
            label="Member Type"
            dataSource={[{ name: 'Employee' }, { name: 'Student' }, { name: 'Guest' }]}
            textField="name"
            valueField="name"
            value={memberType}
            onChange={setMemberType}
          />
          <TextBox label="Member Name" type="text" value={memberName} onChange={setMemberName} />
          <TextBox label="Member ID" type="text" value={memberId} onChange={setMemberId} />
          <TextBox label="Program" type="text" value={program} onChange={setProgram} />
          <TextBox label="Academic Year/Session" type="text" value={academicYear} onChange={setAcademicYear} />
          <DropDownList
            label="Membership Plan"
            dataSource={mockMembershipTypes}
            textField="name"
            valueField="membershipTypeId"
            value={membershipPlan}
            onChange={setMembershipPlan}
          />
          <TextBox label="Health Center" type="text" value={healthCenter} onChange={setHealthCenter} />
          <TextBox label="Membership Date" type="date" value={membershipDate} onChange={setMembershipDate} />
          <TextBox label="Valid From" type="date" value={validFrom} onChange={setValidFrom} />
        </FormGrid>
        <div className="flex justify-end gap-2 mt-6">
          <LinkButton variant="outlined" to="/health-management/memberships">Cancel</LinkButton>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </div>
      </FormCard>
    </FormPage>
  );
}
