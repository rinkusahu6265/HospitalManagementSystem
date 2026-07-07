import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormCard, FormGrid } from '@/shared/new-components';
import { TextBox, TextArea, DropDownList } from '@/shared/components/forms';
import { Button, LinkButton } from '@/shared/components/buttons';
import { mockDoctors, mockMedicalStock } from '@/features/health-management/data';

export default function AddPrescriptionPage() {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [medicine, setMedicine] = useState('');
  const [dose, setDose] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSave = () => {
    navigate('/health-management/prescriptions');
  };

  return (
    <FormPage
      title="Add Prescription"
      description="Create a new prescription"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Prescriptions', url: '/health-management/prescriptions' },
        { label: 'Add Prescription' },
      ]}
    >
      <FormCard title="Prescription Details">
        <FormGrid columns={2}>
          <TextBox label="Patient Name" type="text" value={patientName} onChange={setPatientName} />
          <DropDownList
            label="Doctor"
            dataSource={mockDoctors}
            textField="name"
            valueField="doctorId"
            value={doctor}
            onChange={setDoctor}
          />
          <DropDownList
            label="Medicine"
            dataSource={mockMedicalStock}
            textField="saltName"
            valueField="stockId"
            value={medicine}
            onChange={setMedicine}
          />
          <TextBox label="Dose" type="text" value={dose} onChange={setDose} />
          <DropDownList
            label="Frequency"
            dataSource={[
              { name: 'OD' }, { name: 'BD' }, { name: 'TDS' },
              { name: 'QID' }, { name: 'HS' }, { name: 'SOS' },
            ]}
            textField="name"
            valueField="name"
            value={frequency}
            onChange={setFrequency}
          />
          <TextBox label="Duration" type="text" value={duration} onChange={setDuration} />
          <TextArea label="Remarks" rows={3} value={remarks} onChange={setRemarks} />
        </FormGrid>
        <div className="flex justify-end gap-2 mt-6">
          <LinkButton variant="outlined" to="/health-management/prescriptions">Cancel</LinkButton>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </div>
      </FormCard>
    </FormPage>
  );
}
