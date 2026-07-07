import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormCard, FormGrid } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import Button from '@/shared/components/buttons/Button';
import TextBox from '@/shared/components/forms/TextBox';
import DropDownList from '@/shared/components/forms/DropDownList';

export default function AddAppointmentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    memberName: '',
    doctorId: '',
    speciality: '',
    date: '',
    timeSlot: '',
    healthCenter: '',
    reason: '',
  });

  const handleChange = (field: string) => (value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to the backend.
    // For now, we just redirect back to the appointments list.
    navigate('/health-management/appointments');
  };

  const doctorOptions = [
    { label: 'Dr. Arvind Sharma (General Medicine)', value: 'doc_arvind' },
    { label: 'Dr. Meena Gupta (General Medicine)', value: 'doc_meena' },
    { label: 'Dr. Sanjay Mishra (Orthopedics)', value: 'doc_sanjay' },
    { label: 'Dr. Sunita Patel (Dermatology)', value: 'doc_sunita' },
    { label: 'Dr. Karthik Subramaniam (Cardiology)', value: 'doc_karthik' },
  ];

  const timeSlotOptions = [
    { label: '09:00 AM - 09:15 AM', value: '09:00-09:15' },
    { label: '09:30 AM - 09:45 AM', value: '09:30-09:45' },
    { label: '10:00 AM - 10:15 AM', value: '10:00-10:15' },
    { label: '10:30 AM - 10:45 AM', value: '10:30-10:45' },
    { label: '11:00 AM - 11:15 AM', value: '11:00-11:15' },
    { label: '02:00 PM - 02:15 PM', value: '14:00-14:15' },
    { label: '03:00 PM - 03:15 PM', value: '15:00-15:15' },
    { label: '04:00 PM - 04:15 PM', value: '16:00-16:15' },
  ];

  const healthCenterOptions = [
    { label: 'Main Campus Health Center', value: 'Main Campus' },
    { label: 'Engineering Block Clinic', value: 'Engineering Block' },
    { label: 'Admin Block Clinic', value: 'Admin Block' },
    { label: 'Science Block Clinic', value: 'Science Block' },
  ];

  return (
    <FormPage
      title="Book Appointment"
      description="Schedule a new appointment with a doctor"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Appointments', url: '/health-management/appointments' },
        { label: 'Book Appointment' },
      ]}
      headerAction={
        <div className="flex gap-3">
          <LinkButton to="/health-management/appointments" variant="outlined">
            Cancel
          </LinkButton>
          <Button variant="primary" onClick={handleSave}>
            Confirm Booking
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSave} className="space-y-6">
        <FormCard title="Appointment Details" icon="pi-calendar">
          <FormGrid>
            <TextBox
              label="Patient Name"
              value={formData.memberName}
              onChange={handleChange('memberName')}
              placeholder="Enter patient's full name"
            />
            
            <DropDownList
              label="Select Doctor"
              value={formData.doctorId}
              onChange={handleChange('doctorId')}
              dataSource={doctorOptions}
              textField="label"
              placeholder="Choose a doctor"
            />

            <DropDownList
              label="Health Center"
              value={formData.healthCenter}
              onChange={handleChange('healthCenter')}
              dataSource={healthCenterOptions}
              textField="label"
              placeholder="Select health center location"
            />

            <TextBox
              label="Date"
              type="date"
              value={formData.date}
              onChange={handleChange('date')}
            />

            <DropDownList
              label="Time Slot"
              value={formData.timeSlot}
              onChange={handleChange('timeSlot')}
              dataSource={timeSlotOptions}
              textField="label"
              placeholder="Select available time slot"
            />

            <TextBox
              label="Reason for Visit"
              value={formData.reason}
              onChange={handleChange('reason')}
              placeholder="Brief description of symptoms or reason"
            />
          </FormGrid>
        </FormCard>
      </form>
    </FormPage>
  );
}
