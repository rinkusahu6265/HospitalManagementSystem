import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormCard, FormGrid } from '@/shared/new-components';
import { TextBox, TextArea, DropDownList } from '@/shared/components/forms';
import { Button, LinkButton } from '@/shared/components/buttons';
import { mockMemberships, mockAffiliatedHospitals, mockReferralTemplates, mockDoctors } from '@/features/health-management/data';

export default function AddHealthRecordPage() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState('');
  const [dependent, setDependent] = useState('');
  const [healthCenter, setHealthCenter] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [pastMedicalHistory, setPastMedicalHistory] = useState('');
  const [regularMedicine, setRegularMedicine] = useState('');
  const [drugAllergy, setDrugAllergy] = useState('');
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [examinationFindings, setExaminationFindings] = useState('');
  const [prescription, setPrescription] = useState('');
  const [clinicalNoting, setClinicalNoting] = useState('');
  const [referToHospital, setReferToHospital] = useState('');
  const [approvedHospital, setApprovedHospital] = useState('');
  const [referralTemplate, setReferralTemplate] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleSave = () => {
    navigate('/health-management/records');
  };

  return (
    <FormPage
      title="Add Health Record"
      description="Create a new patient health record"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Health Records', url: '/health-management/records' },
        { label: 'Add Health Record' },
      ]}
    >
      <FormCard title="Patient Information" icon="user">
        <FormGrid columns={2}>
          <DropDownList
            label="Patient"
            dataSource={mockMemberships}
            textField="memberName"
            valueField="memberId"
            value={patient}
            onChange={setPatient}
          />
          <DropDownList
            label="Dependent"
            dataSource={[{ name: 'Yes' }, { name: 'No' }]}
            textField="name"
            valueField="name"
            value={dependent}
            onChange={setDependent}
          />
          <TextBox label="Health Center" type="text" value={healthCenter} onChange={setHealthCenter} />
          <TextBox label="Visit Date" type="date" value={visitDate} onChange={setVisitDate} />
          <TextBox label="Visit Time" type="text" value={visitTime} onChange={setVisitTime} placeholder="HH:MM" />
          <TextBox label="Height (cm)" type="number" value={height} onChange={setHeight} />
          <TextBox label="Weight (kg)" type="number" value={weight} onChange={setWeight} />
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
        </FormGrid>
      </FormCard>

      <FormCard title="Medical History" icon="history">
        <FormGrid columns={1}>
          <TextArea label="Past Medical History" rows={3} value={pastMedicalHistory} onChange={setPastMedicalHistory} />
          <TextArea label="Regular Medicine" rows={3} value={regularMedicine} onChange={setRegularMedicine} />
          <TextArea label="Drug Allergy" rows={3} value={drugAllergy} onChange={setDrugAllergy} />
        </FormGrid>
      </FormCard>

      <FormCard title="Consultation Details" icon="stethoscope">
        <FormGrid columns={1}>
          <TextArea label="Chief Complaint" rows={3} value={chiefComplaint} onChange={setChiefComplaint} />
          <TextArea label="Examination Findings" rows={3} value={examinationFindings} onChange={setExaminationFindings} />
          <TextArea label="Prescription" rows={3} value={prescription} onChange={setPrescription} />
          <TextArea label="Clinical Noting" rows={3} value={clinicalNoting} onChange={setClinicalNoting} />
        </FormGrid>
      </FormCard>

      <FormCard title="Referral" icon="send">
        <FormGrid columns={2}>
          <DropDownList
            label="Refer to Hospital?"
            dataSource={[{ name: 'Yes' }, { name: 'No' }]}
            textField="name"
            valueField="name"
            value={referToHospital}
            onChange={setReferToHospital}
          />
          <DropDownList
            label="Approved Hospital"
            dataSource={mockAffiliatedHospitals}
            textField="name"
            valueField="name"
            value={approvedHospital}
            onChange={setApprovedHospital}
          />
          <DropDownList
            label="Referral Template"
            dataSource={mockReferralTemplates}
            textField="name"
            valueField="name"
            value={referralTemplate}
            onChange={setReferralTemplate}
          />
          <DropDownList
            label="Doctor"
            dataSource={mockDoctors}
            textField="name"
            valueField="doctorId"
            value={doctor}
            onChange={setDoctor}
          />
        </FormGrid>
      </FormCard>

      <div className="flex justify-end gap-2 mt-6">
        <LinkButton variant="outlined" to="/health-management/records">Cancel</LinkButton>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </div>
    </FormPage>
  );
}
