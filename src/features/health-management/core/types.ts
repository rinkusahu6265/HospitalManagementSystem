export interface Membership {
  memberId: string;
  memberName: string;
  memberType: string;
  membershipTypeId: string;
  healthCenter: string;
  validFrom: string;
  validTill: string;
  dependents: number;
}

export interface HealthRecord {
  recordId: string;
  memberName: string;
  healthCenter: string;
  dateOfVisit: string;
  timeOfVisit: string;
  chiefComplaint: string;
  bloodGroup: string;
  height: string;
  weight: string;
  pastMedicalHistory: string;
  regularMedicine: string;
  drugAllergy: string;
  examinationFindings: string;
  prescription: string;
  clinicalNoting: string;
  referredToHospital: string;
  referralTemplate: string;
  referredToDoctor: string;
  createdBy: string;
}

export interface MedicalStock {
  stockId: string;
  saltName: string;
  brandName: string;
  companyName: string;
  batchNo: string;
  stockTypeName: string;
  expiryDate: string;
  quantity: number;
  unitPrice: number;
  healthCenter: string;
}

export interface PrescriptionItem {
  medicine: string;
  dose: string;
  frequency: string;
  duration: string;
}

export interface Prescription {
  prescriptionId: string;
  patientName: string;
  prescribedBy: string;
  prescribedOn: string;
  items: PrescriptionItem[];
  remarks: string;
}

export interface DispensaryItem {
  medicine: string;
  quantity: number;
}

export interface Dispensary {
  dispensaryId: string;
  patientName: string;
  dispensedBy: string;
  dispensedOn: string;
  items: DispensaryItem[];
  remarks: string;
}

export interface Appointment {
  appointmentId: string;
  memberName: string;
  doctorName: string;
  speciality: string;
  date: string;
  timeSlot: string;
  status: string;
  healthCenter: string;
}

export interface Doctor {
  doctorId: string;
  name: string;
  speciality: string;
  hospital: string;
  visitingHoursStart: string;
  visitingHoursEnd: string;
  visitingDays: string;
  contact: string;
  visitingStatus: string;
}

export interface GuestUser {
  guestId: string;
  name: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  status: string;
}

export interface MembershipType {
  membershipTypeId: string;
  name: string;
  memberType: string;
  healthCenter: string;
  benefits: string;
  validityType: string;
  feeAmount: number;
  status: string;
}

export interface UnitType {
  name: string;
  description: string;
  status: string;
}

export interface Facility {
  name: string;
  description: string;
  status: string;
}

export interface AffiliatedHospital {
  name: string;
  address: string;
  contact: string;
  status: string;
}

export interface DoctorSpeciality {
  name: string;
  description: string;
  status: string;
}

export interface ReferralTemplate {
  name: string;
  body: string;
  status: string;
}

export interface MedicineSalt {
  saltName: string;
  description: string;
  status: string;
}

export interface Brand {
  brandName: string;
  companyName: string;
  status: string;
}

export interface Company {
  companyName: string;
  description: string;
  status: string;
}

export interface StockType {
  stockTypeName: string;
  description: string;
  status: string;
}

export interface PrescriptionCode {
  code: string;
  description: string;
  dose: string;
}

export interface PortalTile {
  icon: string;
  title: string;
  description: string;
  color: string;
  to: string;
}

export interface Role {
  roleId: string;
  roleName: string;
  portal: string;
  tiles: PortalTile[];
  permissions: string[];
}

export interface MockUser {
  id: string;
  name: string;
  role: string;
  email: string;
}

export const MEMBER_TYPES = ['Employee', 'Student', 'Guest'] as const;
export const VALIDITY_TYPES = ['Lifetime', 'Valid Till', 'Superannuation'] as const;
export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const;
export const FREQUENCY_OPTIONS = ['OD', 'BD', 'TDS', 'QID', 'HS', 'SOS'] as const;
export const APPOINTMENT_STATUS = ['Scheduled', 'Completed', 'Cancelled'] as const;
export const VISITING_STATUS = ['Available', 'Unavailable'] as const;
export const GENDER_OPTIONS = ['Male', 'Female', 'Other'] as const;
export const GUEST_STATUS = ['Active', 'Inactive'] as const;
export const STOCK_THRESHOLD_LOW = 50;
export const STOCK_THRESHOLD_OUT = 0;
