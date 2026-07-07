import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormCard, FormGrid } from '@/shared/new-components';
import { TextBox, TextArea, DropDownList } from '@/shared/components/forms';
import { Button, LinkButton } from '@/shared/components/buttons';

export default function AddGuestUserPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSave = () => {
    navigate('/health-management/guest-users');
  };

  return (
    <FormPage
      title="Add Guest User"
      description="Register a new guest user"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Guest Users', url: '/health-management/guest-users' },
        { label: 'Add Guest User' },
      ]}
    >
      <FormCard title="Guest User Information">
        <FormGrid columns={2}>
          <TextBox label="Full Name" type="text" value={fullName} onChange={setFullName} />
          <TextBox label="Email" type="email" value={email} onChange={setEmail} />
          <TextBox label="Mobile" type="text" value={mobile} onChange={setMobile} />
          <TextBox label="Date of Birth" type="date" value={dateOfBirth} onChange={setDateOfBirth} />
          <DropDownList
            label="Gender"
            dataSource={[{ name: 'Male' }, { name: 'Female' }, { name: 'Other' }]}
            textField="name"
            valueField="name"
            value={gender}
            onChange={setGender}
          />
          <DropDownList
            label="Blood Group"
            dataSource={[
              { name: 'A+' }, { name: 'A-' }, { name: 'B+' }, { name: 'B-' },
              { name: 'AB+' }, { name: 'AB-' }, { name: 'O+' }, { name: 'O-' },
            ]}
            textField="name"
            valueField="name"
            value={bloodGroup}
            onChange={setBloodGroup}
          />
          <TextArea label="Remarks" rows={3} value={remarks} onChange={setRemarks} />
        </FormGrid>
        <div className="flex justify-end gap-2 mt-6">
          <LinkButton variant="outlined" to="/health-management/guest-users">Cancel</LinkButton>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </div>
      </FormCard>
    </FormPage>
  );
}
