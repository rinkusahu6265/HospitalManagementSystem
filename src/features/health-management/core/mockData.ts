import type {
  Membership, HealthRecord, MedicalStock, Prescription, Dispensary,
  Appointment, Doctor, GuestUser, MembershipType, UnitType, Facility,
  AffiliatedHospital, DoctorSpeciality, ReferralTemplate, MedicineSalt,
  Brand, Company, StockType, PrescriptionCode
} from './types';

export const mockMemberships: Membership[] = [
  { memberId: 'MEM001', memberName: 'Rajesh Kumar', memberType: 'Employee', membershipTypeId: 'MT001', healthCenter: 'Main Campus', validFrom: '2024-01-01', validTill: 'Lifetime', dependents: 3 },
  { memberId: 'MEM002', memberName: 'Priya Sharma', memberType: 'Employee', membershipTypeId: 'MT001', healthCenter: 'Main Campus', validFrom: '2024-01-15', validTill: 'Lifetime', dependents: 2 },
  { memberId: 'MEM003', memberName: 'Amit Patel', memberType: 'Employee', membershipTypeId: 'MT002', healthCenter: 'Engineering Block', validFrom: '2024-02-01', validTill: '2026-12-31', dependents: 4 },
  { memberId: 'MEM004', memberName: 'Sneha Reddy', memberType: 'Student', membershipTypeId: 'MT004', healthCenter: 'Main Campus', validFrom: '2024-06-01', validTill: '2026-05-31', dependents: 0 },
  { memberId: 'MEM005', memberName: 'Vikram Singh', memberType: 'Employee', membershipTypeId: 'MT003', healthCenter: 'Science Block', validFrom: '2023-11-01', validTill: 'Lifetime', dependents: 3 },
  { memberId: 'MEM006', memberName: 'Ananya Gupta', memberType: 'Student', membershipTypeId: 'MT004', healthCenter: 'Main Campus', validFrom: '2024-07-01', validTill: '2027-06-30', dependents: 0 },
  { memberId: 'MEM007', memberName: 'Deepak Joshi', memberType: 'Employee', membershipTypeId: 'MT002', healthCenter: 'Admin Block', validFrom: '2024-03-01', validTill: '2028-02-29', dependents: 2 },
  { memberId: 'MEM008', memberName: 'Kavita Nair', memberType: 'Guest', membershipTypeId: 'MT005', healthCenter: 'Main Campus', validFrom: '2024-04-01', validTill: '2024-12-31', dependents: 1 },
  { memberId: 'MEM009', memberName: 'Rohan Deshmukh', memberType: 'Student', membershipTypeId: 'MT004', healthCenter: 'Engineering Block', validFrom: '2024-08-01', validTill: '2028-07-31', dependents: 0 },
  { memberId: 'MEM010', memberName: 'Meena Iyer', memberType: 'Employee', membershipTypeId: 'MT003', healthCenter: 'Library', validFrom: '2023-06-01', validTill: 'Lifetime', dependents: 2 },
  { memberId: 'MEM011', memberName: 'Suresh Rao', memberType: 'Employee', membershipTypeId: 'MT001', healthCenter: 'Main Campus', validFrom: '2024-05-01', validTill: 'Lifetime', dependents: 3 },
  { memberId: 'MEM012', memberName: 'Neha Thakur', memberType: 'Student', membershipTypeId: 'MT006', healthCenter: 'Science Block', validFrom: '2024-09-01', validTill: '2026-08-31', dependents: 0 },
  { memberId: 'MEM013', memberName: 'Arun Verma', memberType: 'Guest', membershipTypeId: 'MT005', healthCenter: 'Main Campus', validFrom: '2024-10-01', validTill: '2025-03-31', dependents: 2 },
  { memberId: 'MEM014', memberName: 'Pooja Malhotra', memberType: 'Employee', membershipTypeId: 'MT002', healthCenter: 'Engineering Block', validFrom: '2024-04-15', validTill: '2027-04-14', dependents: 1 },
  { memberId: 'MEM015', memberName: 'Lakshmi Narayanan', memberType: 'Guest', membershipTypeId: 'MT005', healthCenter: 'Main Campus', validFrom: '2024-11-01', validTill: '2025-04-30', dependents: 0 },
];

export const mockHealthRecords: HealthRecord[] = [
  { recordId: 'HR001', memberName: 'Rajesh Kumar', healthCenter: 'Main Campus', dateOfVisit: '2024-10-15', timeOfVisit: '10:30', chiefComplaint: 'Fever and body ache for 3 days', bloodGroup: 'B+', height: '172', weight: '78', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'Temperature 101.2F, throat congested', prescription: 'Paracetamol 650mg TDS x 3 days', clinicalNoting: 'Upper respiratory tract infection', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Arvind Sharma' },
  { recordId: 'HR002', memberName: 'Priya Sharma', healthCenter: 'Main Campus', dateOfVisit: '2024-10-20', timeOfVisit: '11:00', chiefComplaint: 'Severe headache since 2 days', bloodGroup: 'O+', height: '158', weight: '62', pastMedicalHistory: 'Migraine', regularMedicine: 'None', drugAllergy: 'Aspirin', examinationFindings: 'BP 130/85, no neurological deficit', prescription: 'Sumatriptan 50mg SOS', clinicalNoting: 'Migraine without aura', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Meena Gupta' },
  { recordId: 'HR003', memberName: 'Amit Patel', healthCenter: 'Engineering Block', dateOfVisit: '2024-11-01', timeOfVisit: '09:15', chiefComplaint: 'Cough and cold with sputum', bloodGroup: 'A+', height: '176', weight: '82', pastMedicalHistory: 'Asthma', regularMedicine: 'Inhaler PRN', drugAllergy: 'Penicillin', examinationFindings: 'Wheezing present, SpO2 97%', prescription: 'Azithromycin 500mg OD x 3 days, Salbutamol inhaler', clinicalNoting: 'Acute bronchitis with asthma exacerbation', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Arvind Sharma' },
  { recordId: 'HR004', memberName: 'Sneha Reddy', healthCenter: 'Main Campus', dateOfVisit: '2024-11-05', timeOfVisit: '14:30', chiefComplaint: 'Sprained ankle while playing', bloodGroup: 'AB+', height: '163', weight: '55', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'Swelling over right ankle, tender', prescription: 'Brufen 400mg TDS x 5 days, rest', clinicalNoting: 'Grade I ankle sprain', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Sanjay Mishra' },
  { recordId: 'HR005', memberName: 'Vikram Singh', healthCenter: 'Science Block', dateOfVisit: '2024-11-10', timeOfVisit: '10:00', chiefComplaint: 'Stomach pain and acidity', bloodGroup: 'B-', height: '180', weight: '88', pastMedicalHistory: 'Gastritis', regularMedicine: 'None', drugAllergy: 'NSAIDs', examinationFindings: 'Epigastric tenderness, no guarding', prescription: 'Omeprazole 20mg OD x 14 days', clinicalNoting: 'Acute gastritis', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Meena Gupta' },
  { recordId: 'HR006', memberName: 'Ananya Gupta', healthCenter: 'Main Campus', dateOfVisit: '2024-11-12', timeOfVisit: '15:45', chiefComplaint: 'Skin rash on arms and face', bloodGroup: 'O+', height: '160', weight: '54', pastMedicalHistory: 'Eczema', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'Erythematous papules on forearms and cheeks', prescription: 'Cetirizine 10mg OD x 7 days, Calamine lotion', clinicalNoting: 'Allergic contact dermatitis', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Sunita Patel' },
  { recordId: 'HR007', memberName: 'Deepak Joshi', healthCenter: 'Admin Block', dateOfVisit: '2024-11-15', timeOfVisit: '09:30', chiefComplaint: 'Chest pain on exertion', bloodGroup: 'A-', height: '175', weight: '92', pastMedicalHistory: 'Hypertension, Diabetes', regularMedicine: 'Amlodipine 5mg, Metformin 500mg', drugAllergy: 'None', examinationFindings: 'BP 150/95, ECG normal', prescription: 'Referral to cardiology', clinicalNoting: 'Suspected angina, refer for stress test', referredToHospital: 'City Heart Institute', referralTemplate: 'Cardiology Referral', referredToDoctor: 'Dr. Karthik Subramaniam', createdBy: 'Dr. Arvind Sharma' },
  { recordId: 'HR008', memberName: 'Kavita Nair', healthCenter: 'Main Campus', dateOfVisit: '2024-11-18', timeOfVisit: '11:30', chiefComplaint: 'Eye irritation and redness', bloodGroup: 'AB-', height: '165', weight: '60', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'Conjunctival injection both eyes, watery discharge', prescription: 'Moxifloxacin eye drops TDS x 5 days', clinicalNoting: 'Viral conjunctivitis', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Sanjay Mishra' },
  { recordId: 'HR009', memberName: 'Rohan Deshmukh', healthCenter: 'Engineering Block', dateOfVisit: '2024-11-20', timeOfVisit: '13:00', chiefComplaint: 'Ear pain and discharge', bloodGroup: 'B+', height: '178', weight: '71', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'Right ear canal edematous, purulent discharge', prescription: 'Amoxicillin 500mg TDS x 7 days, ear drops', clinicalNoting: 'Acute otitis media', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Sanjay Mishra' },
  { recordId: 'HR010', memberName: 'Meena Iyer', healthCenter: 'Library', dateOfVisit: '2024-11-22', timeOfVisit: '10:15', chiefComplaint: 'Lower back pain since 1 month', bloodGroup: 'O-', height: '162', weight: '68', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'Lumbar spine tenderness, SLR 60 degrees', prescription: 'Diclozem plus TDS x 7 days, physiotherapy', clinicalNoting: 'Mechanical low back pain', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Meena Gupta' },
  { recordId: 'HR011', memberName: 'Suresh Rao', healthCenter: 'Main Campus', dateOfVisit: '2024-11-25', timeOfVisit: '08:45', chiefComplaint: 'Routine health checkup', bloodGroup: 'A+', height: '170', weight: '75', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'All vitals normal, BMI 25.9', prescription: 'Multivitamin OD, exercise regimen', clinicalNoting: 'Healthy, advised preventive care', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Arvind Sharma' },
  { recordId: 'HR012', memberName: 'Neha Thakur', healthCenter: 'Science Block', dateOfVisit: '2024-11-28', timeOfVisit: '16:00', chiefComplaint: 'Dizziness and fatigue', bloodGroup: 'B+', height: '164', weight: '50', pastMedicalHistory: 'Anemia', regularMedicine: 'Iron supplements', drugAllergy: 'None', examinationFindings: 'Pale conjunctiva, Hb 9.2 g/dL', prescription: 'Ferrous sulfate 200mg BD x 30 days', clinicalNoting: 'Iron deficiency anemia', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Sunita Patel' },
  { recordId: 'HR013', memberName: 'Arun Verma', healthCenter: 'Main Campus', dateOfVisit: '2024-12-01', timeOfVisit: '12:00', chiefComplaint: 'Dog bite on left leg', bloodGroup: 'A+', height: '169', weight: '73', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'None', examinationFindings: 'Puncture wound with bruising', prescription: 'ARV vaccine 0,3,7,14,28 days, TT injection', clinicalNoting: 'Category II dog bite', referredToHospital: 'District General Hospital', referralTemplate: 'Rabies Protocol', referredToDoctor: 'Dr. Nirmal Shah', createdBy: 'Dr. Sanjay Mishra' },
  { recordId: 'HR014', memberName: 'Pooja Malhotra', healthCenter: 'Engineering Block', dateOfVisit: '2024-12-03', timeOfVisit: '09:30', chiefComplaint: 'Sore throat and fever', bloodGroup: 'O+', height: '161', weight: '57', pastMedicalHistory: 'None', regularMedicine: 'None', drugAllergy: 'Sulfa', examinationFindings: 'Pharyngeal erythema, tonsillar exudates', prescription: 'Cefpodoxime 200mg BD x 5 days', clinicalNoting: 'Acute tonsillitis', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Meena Gupta' },
  { recordId: 'HR015', memberName: 'Lakshmi Narayanan', healthCenter: 'Main Campus', dateOfVisit: '2024-12-05', timeOfVisit: '11:15', chiefComplaint: 'Joint pain in knees', bloodGroup: 'AB+', height: '167', weight: '70', pastMedicalHistory: 'Osteoarthritis', regularMedicine: 'Glucosamine', drugAllergy: 'None', examinationFindings: 'Bilateral knee crepitus, mild effusion', prescription: 'Aceclofenac 100mg BD x 7 days, physiotherapy referral', clinicalNoting: 'Osteoarthritis knee flare-up', referredToHospital: '', referralTemplate: '', referredToDoctor: '', createdBy: 'Dr. Arvind Sharma' },
];

export const mockMedicalStock: MedicalStock[] = [
  { stockId: 'STK001', saltName: 'Paracetamol', brandName: 'Crocin', companyName: 'GSK', batchNo: 'BCH-2401-A', stockTypeName: 'Tablet', expiryDate: '2026-06-30', quantity: 500, unitPrice: 0.50, healthCenter: 'Main Campus' },
  { stockId: 'STK002', saltName: 'Amoxicillin', brandName: 'Mox', companyName: 'Cipla', batchNo: 'BCH-2402-B', stockTypeName: 'Capsule', expiryDate: '2026-03-15', quantity: 200, unitPrice: 2.00, healthCenter: 'Main Campus' },
  { stockId: 'STK003', saltName: 'Omeprazole', brandName: 'Omez', companyName: 'Dr. Reddy\'s', batchNo: 'BCH-2403-C', stockTypeName: 'Capsule', expiryDate: '2025-11-30', quantity: 350, unitPrice: 1.50, healthCenter: 'Engineering Block' },
  { stockId: 'STK004', saltName: 'Cetirizine', brandName: 'Zyrtec', companyName: 'Sun Pharma', batchNo: 'BCH-2404-D', stockTypeName: 'Tablet', expiryDate: '2027-01-31', quantity: 45, unitPrice: 0.75, healthCenter: 'Main Campus' },
  { stockId: 'STK005', saltName: 'Amlodipine', brandName: 'Amlopin', companyName: 'Torrent Pharma', batchNo: 'BCH-2405-E', stockTypeName: 'Tablet', expiryDate: '2025-09-30', quantity: 0, unitPrice: 1.25, healthCenter: 'Science Block' },
  { stockId: 'STK006', saltName: 'Azithromycin', brandName: 'Azithral', companyName: 'Alembic', batchNo: 'BCH-2406-F', stockTypeName: 'Tablet', expiryDate: '2026-08-15', quantity: 150, unitPrice: 3.00, healthCenter: 'Admin Block' },
  { stockId: 'STK007', saltName: 'Salbutamol', brandName: 'Asthalin', companyName: 'Cipla', batchNo: 'BCH-2407-G', stockTypeName: 'Inhaler', expiryDate: '2025-12-31', quantity: 25, unitPrice: 85.00, healthCenter: 'Main Campus' },
  { stockId: 'STK008', saltName: 'Metformin', brandName: 'Glyciphage', companyName: 'Franco-Indian', batchNo: 'BCH-2408-H', stockTypeName: 'Tablet', expiryDate: '2026-10-31', quantity: 300, unitPrice: 1.00, healthCenter: 'Engineering Block' },
  { stockId: 'STK009', saltName: 'Ibuprofen', brandName: 'Brufen', companyName: 'Abbott', batchNo: 'BCH-2409-I', stockTypeName: 'Tablet', expiryDate: '2024-05-31', quantity: 80, unitPrice: 0.60, healthCenter: 'Main Campus' },
  { stockId: 'STK010', saltName: 'Cefpodoxime', brandName: 'Cefoprox', companyName: 'Cipla', batchNo: 'BCH-2410-J', stockTypeName: 'Tablet', expiryDate: '2026-12-31', quantity: 120, unitPrice: 4.50, healthCenter: 'Main Campus' },
  { stockId: 'STK011', saltName: 'Moxifloxacin', brandName: 'Moxicip', companyName: 'Cipla', batchNo: 'BCH-2411-K', stockTypeName: 'Eye Drops', expiryDate: '2025-04-30', quantity: 30, unitPrice: 55.00, healthCenter: 'Science Block' },
  { stockId: 'STK012', saltName: 'Ferrous Sulfate', brandName: 'Ferronia', companyName: 'Sun Pharma', batchNo: 'BCH-2412-L', stockTypeName: 'Tablet', expiryDate: '2027-03-31', quantity: 10, unitPrice: 0.80, healthCenter: 'Main Campus' },
  { stockId: 'STK013', saltName: 'Sumatriptan', brandName: 'Suminat', companyName: 'Natco Pharma', batchNo: 'BCH-2413-M', stockTypeName: 'Tablet', expiryDate: '2025-07-31', quantity: 60, unitPrice: 8.00, healthCenter: 'Admin Block' },
  { stockId: 'STK014', saltName: 'Diclofenac', brandName: 'Diclozem', companyName: 'Torrent Pharma', batchNo: 'BCH-2414-N', stockTypeName: 'Tablet', expiryDate: '2026-02-28', quantity: 0, unitPrice: 1.10, healthCenter: 'Engineering Block' },
  { stockId: 'STK015', saltName: 'Aceclofenac', brandName: 'Aceclo', companyName: 'Intas Pharma', batchNo: 'BCH-2415-O', stockTypeName: 'Tablet', expiryDate: '2026-11-30', quantity: 90, unitPrice: 1.80, healthCenter: 'Main Campus' },
];

export const mockPrescriptions: Prescription[] = [
  { prescriptionId: 'PR001', patientName: 'Rajesh Kumar', prescribedBy: 'Dr. Arvind Sharma', prescribedOn: '2024-10-15', items: [{ medicine: 'Paracetamol 650mg', dose: '1 tablet', frequency: 'TDS', duration: '3 days' }], remarks: 'Take after meals. Avoid alcohol.' },
  { prescriptionId: 'PR002', patientName: 'Priya Sharma', prescribedBy: 'Dr. Meena Gupta', prescribedOn: '2024-10-20', items: [{ medicine: 'Sumatriptan 50mg', dose: '1 tablet', frequency: 'SOS', duration: 'As needed' }], remarks: 'Take at onset of headache. Max 2 per day.' },
  { prescriptionId: 'PR003', patientName: 'Amit Patel', prescribedBy: 'Dr. Arvind Sharma', prescribedOn: '2024-11-01', items: [{ medicine: 'Azithromycin 500mg', dose: '1 tablet', frequency: 'OD', duration: '3 days' }, { medicine: 'Salbutamol Inhaler', dose: '2 puffs', frequency: 'SOS', duration: 'As needed' }], remarks: 'Avoid smoke and dust. Continue inhaler as needed.' },
  { prescriptionId: 'PR004', patientName: 'Sneha Reddy', prescribedBy: 'Dr. Sanjay Mishra', prescribedOn: '2024-11-05', items: [{ medicine: 'Brufen 400mg', dose: '1 tablet', frequency: 'TDS', duration: '5 days' }], remarks: 'Rest and ice application. Avoid sports for 1 week.' },
  { prescriptionId: 'PR005', patientName: 'Vikram Singh', prescribedBy: 'Dr. Meena Gupta', prescribedOn: '2024-11-10', items: [{ medicine: 'Omeprazole 20mg', dose: '1 capsule', frequency: 'OD', duration: '14 days' }, { medicine: 'Domperidone 10mg', dose: '1 tablet', frequency: 'TDS', duration: '7 days' }], remarks: 'Take omeprazole empty stomach. Avoid spicy food.' },
  { prescriptionId: 'PR006', patientName: 'Deepak Joshi', prescribedBy: 'Dr. Arvind Sharma', prescribedOn: '2024-11-15', items: [{ medicine: 'Aspirin 75mg', dose: '1 tablet', frequency: 'OD', duration: 'Long term' }, { medicine: 'Atorvastatin 10mg', dose: '1 tablet', frequency: 'OD', duration: 'Long term' }], remarks: 'Referred to cardiology for further evaluation.' },
  { prescriptionId: 'PR007', patientName: 'Rohan Deshmukh', prescribedBy: 'Dr. Sanjay Mishra', prescribedOn: '2024-11-20', items: [{ medicine: 'Amoxicillin 500mg', dose: '1 capsule', frequency: 'TDS', duration: '7 days' }, { medicine: 'Ofloxacin Ear Drops', dose: '3 drops', frequency: 'BD', duration: '7 days' }], remarks: 'Keep ear dry while bathing.' },
  { prescriptionId: 'PR008', patientName: 'Neha Thakur', prescribedBy: 'Dr. Sunita Patel', prescribedOn: '2024-11-28', items: [{ medicine: 'Ferrous Sulfate 200mg', dose: '1 tablet', frequency: 'BD', duration: '30 days' }, { medicine: 'Vitamin C 500mg', dose: '1 tablet', frequency: 'OD', duration: '30 days' }], remarks: 'Take iron with vitamin C for better absorption.' },
  { prescriptionId: 'PR009', patientName: 'Pooja Malhotra', prescribedBy: 'Dr. Meena Gupta', prescribedOn: '2024-12-03', items: [{ medicine: 'Cefpodoxime 200mg', dose: '1 tablet', frequency: 'BD', duration: '5 days' }, { medicine: 'Paracetamol 500mg', dose: '1 tablet', frequency: 'SOS', duration: '3 days' }], remarks: 'Complete full course of antibiotics.' },
  { prescriptionId: 'PR010', patientName: 'Arun Verma', prescribedBy: 'Dr. Sanjay Mishra', prescribedOn: '2024-12-01', items: [{ medicine: 'ARV Vaccine (Rabipur)', dose: '1 mL', frequency: 'IM', duration: '0,3,7,14,28 days' }, { medicine: 'Tetanus Toxoid', dose: '0.5 mL', frequency: 'IM', duration: 'Once' }], remarks: 'Follow rabies protocol strictly. Report any allergic reaction immediately.' },
];

export const mockDispensary: Dispensary[] = [
  { dispensaryId: 'DSP001', patientName: 'Rajesh Kumar', dispensedBy: 'Rajesh Pharma', dispensedOn: '2024-10-15', items: [{ medicine: 'Paracetamol 650mg', quantity: 9 }], remarks: 'Dispensed as prescribed' },
  { dispensaryId: 'DSP002', patientName: 'Amit Patel', dispensedBy: 'Rajesh Pharma', dispensedOn: '2024-11-01', items: [{ medicine: 'Azithromycin 500mg', quantity: 3 }, { medicine: 'Salbutamol Inhaler', quantity: 1 }], remarks: 'Inhaler demonstrated to patient' },
  { dispensaryId: 'DSP003', patientName: 'Sneha Reddy', dispensedBy: 'Priya Dispensary', dispensedOn: '2024-11-05', items: [{ medicine: 'Brufen 400mg', quantity: 15 }], remarks: 'Cream also provided for external use' },
  { dispensaryId: 'DSP004', patientName: 'Vikram Singh', dispensedBy: 'Priya Dispensary', dispensedOn: '2024-11-10', items: [{ medicine: 'Omeprazole 20mg', quantity: 14 }], remarks: '' },
  { dispensaryId: 'DSP005', patientName: 'Rohan Deshmukh', dispensedBy: 'Rajesh Pharma', dispensedOn: '2024-11-20', items: [{ medicine: 'Amoxicillin 500mg', quantity: 21 }, { medicine: 'Ofloxacin Ear Drops', quantity: 1 }], remarks: 'Ear drops usage explained' },
  { dispensaryId: 'DSP006', patientName: 'Neha Thakur', dispensedBy: 'Priya Dispensary', dispensedOn: '2024-11-28', items: [{ medicine: 'Ferrous Sulfate 200mg', quantity: 60 }], remarks: 'Counseled about iron supplementation' },
  { dispensaryId: 'DSP007', patientName: 'Pooja Malhotra', dispensedBy: 'Rajesh Pharma', dispensedOn: '2024-12-03', items: [{ medicine: 'Cefpodoxime 200mg', quantity: 10 }, { medicine: 'Paracetamol 500mg', quantity: 6 }], remarks: 'Antibiotic course explained' },
  { dispensaryId: 'DSP008', patientName: 'Arun Verma', dispensedBy: 'Priya Dispensary', dispensedOn: '2024-12-01', items: [{ medicine: 'ARV Vaccine (Rabipur)', quantity: 5 }, { medicine: 'Tetanus Toxoid', quantity: 1 }], remarks: 'First dose administered. Next dose scheduled.' },
];

export const mockAppointments: Appointment[] = [
  { appointmentId: 'APT001', memberName: 'Rajesh Kumar', doctorName: 'Dr. Arvind Sharma', speciality: 'General Medicine', date: '2024-12-10', timeSlot: '10:00-10:15', status: 'Scheduled', healthCenter: 'Main Campus' },
  { appointmentId: 'APT002', memberName: 'Priya Sharma', doctorName: 'Dr. Meena Gupta', speciality: 'General Medicine', date: '2024-12-10', timeSlot: '10:30-10:45', status: 'Completed', healthCenter: 'Main Campus' },
  { appointmentId: 'APT003', memberName: 'Amit Patel', doctorName: 'Dr. Sanjay Mishra', speciality: 'Orthopedics', date: '2024-12-11', timeSlot: '11:00-11:15', status: 'Scheduled', healthCenter: 'Engineering Block' },
  { appointmentId: 'APT004', memberName: 'Sneha Reddy', doctorName: 'Dr. Sunita Patel', speciality: 'Dermatology', date: '2024-12-11', timeSlot: '14:00-14:15', status: 'Cancelled', healthCenter: 'Main Campus' },
  { appointmentId: 'APT005', memberName: 'Deepak Joshi', doctorName: 'Dr. Karthik Subramaniam', speciality: 'Cardiology', date: '2024-12-12', timeSlot: '09:00-09:30', status: 'Scheduled', healthCenter: 'Admin Block' },
  { appointmentId: 'APT006', memberName: 'Kavita Nair', doctorName: 'Dr. Sanjay Mishra', speciality: 'Ophthalmology', date: '2024-12-12', timeSlot: '15:00-15:15', status: 'Completed', healthCenter: 'Main Campus' },
  { appointmentId: 'APT007', memberName: 'Rohan Deshmukh', doctorName: 'Dr. Arvind Sharma', speciality: 'General Medicine', date: '2024-12-13', timeSlot: '10:00-10:15', status: 'Scheduled', healthCenter: 'Engineering Block' },
  { appointmentId: 'APT008', memberName: 'Meena Iyer', doctorName: 'Dr. Meena Gupta', speciality: 'General Medicine', date: '2024-12-13', timeSlot: '11:30-11:45', status: 'Completed', healthCenter: 'Library' },
  { appointmentId: 'APT009', memberName: 'Suresh Rao', doctorName: 'Dr. Arvind Sharma', speciality: 'General Medicine', date: '2024-12-14', timeSlot: '08:30-08:45', status: 'Scheduled', healthCenter: 'Main Campus' },
  { appointmentId: 'APT010', memberName: 'Neha Thakur', doctorName: 'Dr. Sunita Patel', speciality: 'General Medicine', date: '2024-12-14', timeSlot: '14:30-14:45', status: 'Cancelled', healthCenter: 'Science Block' },
  { appointmentId: 'APT011', memberName: 'Pooja Malhotra', doctorName: 'Dr. Meena Gupta', speciality: 'General Medicine', date: '2024-12-15', timeSlot: '10:00-10:15', status: 'Scheduled', healthCenter: 'Engineering Block' },
  { appointmentId: 'APT012', memberName: 'Lakshmi Narayanan', doctorName: 'Dr. Sanjay Mishra', speciality: 'Orthopedics', date: '2024-12-15', timeSlot: '16:00-16:15', status: 'Scheduled', healthCenter: 'Main Campus' },
];

export const mockDoctors: Doctor[] = [
  { doctorId: 'DOC001', name: 'Dr. Arvind Sharma', speciality: 'General Medicine', hospital: 'University Health Center', visitingHoursStart: '09:00', visitingHoursEnd: '13:00', visitingDays: 'Mon,Tue,Wed,Thu,Fri', contact: '+91-9876543210', visitingStatus: 'Available' },
  { doctorId: 'DOC002', name: 'Dr. Meena Gupta', speciality: 'General Medicine', hospital: 'University Health Center', visitingHoursStart: '10:00', visitingHoursEnd: '14:00', visitingDays: 'Mon,Tue,Wed,Thu,Fri,Sat', contact: '+91-9876543211', visitingStatus: 'Available' },
  { doctorId: 'DOC003', name: 'Dr. Sanjay Mishra', speciality: 'Orthopedics', hospital: 'City Ortho Hospital', visitingHoursStart: '14:00', visitingHoursEnd: '17:00', visitingDays: 'Tue,Thu,Sat', contact: '+91-9876543212', visitingStatus: 'Available' },
  { doctorId: 'DOC004', name: 'Dr. Sunita Patel', speciality: 'Dermatology', hospital: 'Skin Care Clinic', visitingHoursStart: '15:00', visitingHoursEnd: '18:00', visitingDays: 'Mon,Wed,Fri', contact: '+91-9876543213', visitingStatus: 'Unavailable' },
  { doctorId: 'DOC005', name: 'Dr. Karthik Subramaniam', speciality: 'Cardiology', hospital: 'City Heart Institute', visitingHoursStart: '09:00', visitingHoursEnd: '12:00', visitingDays: 'Wed,Sat', contact: '+91-9876543214', visitingStatus: 'Available' },
  { doctorId: 'DOC006', name: 'Dr. Anjali Desai', speciality: 'Gynecology', hospital: 'Women\'s Health Center', visitingHoursStart: '10:00', visitingHoursEnd: '14:00', visitingDays: 'Mon,Tue,Thu,Fri', contact: '+91-9876543215', visitingStatus: 'Available' },
  { doctorId: 'DOC007', name: 'Dr. Rakesh Verma', speciality: 'Ophthalmology', hospital: 'Eye Care Institute', visitingHoursStart: '11:00', visitingHoursEnd: '15:00', visitingDays: 'Mon,Wed,Fri', contact: '+91-9876543216', visitingStatus: 'Unavailable' },
  { doctorId: 'DOC008', name: 'Dr. Priya Nair', speciality: 'Pediatrics', hospital: 'Children\'s Hospital', visitingHoursStart: '09:00', visitingHoursEnd: '13:00', visitingDays: 'Tue,Thu,Sat', contact: '+91-9876543217', visitingStatus: 'Available' },
  { doctorId: 'DOC009', name: 'Dr. Vikram Joshi', speciality: 'ENT', hospital: 'ENT Specialist Center', visitingHoursStart: '14:00', visitingHoursEnd: '17:00', visitingDays: 'Mon,Tue,Wed,Thu,Fri', contact: '+91-9876543218', visitingStatus: 'Available' },
  { doctorId: 'DOC010', name: 'Dr. Nirmal Shah', speciality: 'General Medicine', hospital: 'District General Hospital', visitingHoursStart: '08:00', visitingHoursEnd: '16:00', visitingDays: 'Mon,Tue,Wed,Thu,Fri,Sat', contact: '+91-9876543219', visitingStatus: 'Unavailable' },
];

export const mockGuestUsers: GuestUser[] = [
  { guestId: 'GST001', name: 'Kavita Nair', email: 'kavita.nair@gmail.com', mobile: '+91-9988776655', dateOfBirth: '1990-04-12', gender: 'Female', bloodGroup: 'AB-', status: 'Active' },
  { guestId: 'GST002', name: 'Arun Verma', email: 'arun.verma@yahoo.com', mobile: '+91-9988776644', dateOfBirth: '1985-08-25', gender: 'Male', bloodGroup: 'A+', status: 'Active' },
  { guestId: 'GST003', name: 'Lakshmi Narayanan', email: 'lakshmi.n@gmail.com', mobile: '+91-9988776633', dateOfBirth: '1978-11-05', gender: 'Female', bloodGroup: 'AB+', status: 'Active' },
  { guestId: 'GST004', name: 'Manoj Tiwari', email: 'manoj.t@rediffmail.com', mobile: '+91-9988776622', dateOfBirth: '1992-02-18', gender: 'Male', bloodGroup: 'O+', status: 'Inactive' },
  { guestId: 'GST005', name: 'Deepika Rathore', email: 'deepika.r@gmail.com', mobile: '+91-9988776611', dateOfBirth: '1995-06-30', gender: 'Female', bloodGroup: 'B+', status: 'Active' },
  { guestId: 'GST006', name: 'Siddharth Chopra', email: 'sid.chopra@outlook.com', mobile: '+91-9988776600', dateOfBirth: '1988-09-14', gender: 'Male', bloodGroup: 'A-', status: 'Inactive' },
  { guestId: 'GST007', name: 'Radhika Iyengar', email: 'radhika.iyengar@gmail.com', mobile: '+91-9988776599', dateOfBirth: '2000-01-22', gender: 'Female', bloodGroup: 'B-', status: 'Active' },
  { guestId: 'GST008', name: 'Ravi Kulkarni', email: 'ravi.kulkarni@hotmail.com', mobile: '+91-9988776588', dateOfBirth: '1982-07-08', gender: 'Male', bloodGroup: 'O-', status: 'Active' },
];

export const mockMembershipTypes: MembershipType[] = [
  { membershipTypeId: 'MT001', name: 'Standard Employee Plan', memberType: 'Employee', healthCenter: 'Main Campus', benefits: 'OPD consultation, basic diagnostics, pharmacy', validityType: 'Lifetime', feeAmount: 0, status: 'Active' },
  { membershipTypeId: 'MT002', name: 'Premium Family Plan', memberType: 'Employee', healthCenter: 'All Centers', benefits: 'Full coverage including dependents, specialist visits, hospitalization cover', validityType: 'Valid Till', feeAmount: 5000, status: 'Active' },
  { membershipTypeId: 'MT003', name: 'Executive Health Plan', memberType: 'Employee', healthCenter: 'All Centers', benefits: 'Comprehensive annual checkup, priority appointments, dental, vision', validityType: 'Lifetime', feeAmount: 0, status: 'Active' },
  { membershipTypeId: 'MT004', name: 'Student Basic Health', memberType: 'Student', healthCenter: 'Main Campus', benefits: 'OPD consultation, emergency care, basic medicines', validityType: 'Valid Till', feeAmount: 1500, status: 'Active' },
  { membershipTypeId: 'MT005', name: 'Guest Access Plan', memberType: 'Guest', healthCenter: 'Main Campus', benefits: 'OPD consultation only, pharmacy access', validityType: 'Valid Till', feeAmount: 3000, status: 'Active' },
  { membershipTypeId: 'MT006', name: 'Student Comprehensive Plan', memberType: 'Student', healthCenter: 'All Centers', benefits: 'Full OPD, specialist referral, diagnostics, pharmacy', validityType: 'Valid Till', feeAmount: 3000, status: 'Inactive' },
];

export const mockUnitTypes: UnitType[] = [
  { name: 'Tablet', description: 'Solid oral dosage form', status: 'Active' },
  { name: 'Capsule', description: 'Gelatin encapsulated medication', status: 'Active' },
  { name: 'Milliliter', description: 'Liquid medication volume', status: 'Active' },
  { name: 'Piece', description: 'Individual unit item', status: 'Active' },
];

export const mockFacilities: Facility[] = [
  { name: 'OPD Consultation Room', description: 'General outpatient consultation', status: 'Active' },
  { name: 'Pharmacy', description: 'Medicine dispensing center', status: 'Active' },
  { name: 'Diagnostic Lab', description: 'Basic pathology and radiology', status: 'Active' },
  { name: 'Minor OT', description: 'Minor surgical procedures', status: 'Active' },
  { name: 'Physiotherapy Unit', description: 'Rehabilitation and physiotherapy', status: 'Active' },
];

export const mockAffiliatedHospitals: AffiliatedHospital[] = [
  { name: 'City Heart Institute', address: 'MG Road, Pune - 411001', contact: '+91-20-25551234', status: 'Active' },
  { name: 'District General Hospital', address: 'Station Road, Pune - 411002', contact: '+91-20-25556789', status: 'Active' },
  { name: 'Women\'s Health Center', address: 'FC Road, Pune - 411004', contact: '+91-20-25559876', status: 'Active' },
  { name: 'Children\'s Hospital', address: 'JM Road, Pune - 411005', contact: '+91-20-25554321', status: 'Active' },
  { name: 'Eye Care Institute', address: 'Baner, Pune - 411045', contact: '+91-20-25551111', status: 'Active' },
];

export const mockDoctorSpecialities: DoctorSpeciality[] = [
  { name: 'General Medicine', description: 'Primary care and internal medicine', status: 'Active' },
  { name: 'Cardiology', description: 'Heart and cardiovascular system', status: 'Active' },
  { name: 'Orthopedics', description: 'Bones, joints, and musculoskeletal system', status: 'Active' },
  { name: 'Pediatrics', description: 'Medical care for infants and children', status: 'Active' },
  { name: 'Dermatology', description: 'Skin, hair, and nail disorders', status: 'Active' },
  { name: 'Ophthalmology', description: 'Eye and vision care', status: 'Active' },
  { name: 'Gynecology', description: 'Female reproductive health', status: 'Active' },
  { name: 'ENT', description: 'Ear, nose, and throat disorders', status: 'Active' },
];

export const mockReferralTemplates: ReferralTemplate[] = [
  { name: 'Cardiology Referral', body: 'Dear Dr. {doctor},\n\nI am referring {patient} for cardiology evaluation. Patient presents with {complaint}. ECG and basic labs attached.\n\nRegards,\n{referrer}', status: 'Active' },
  { name: 'Orthopedics Referral', body: 'Dear Dr. {doctor},\n\nPlease evaluate {patient} for {complaint}. X-ray report attached. Patient may need further imaging.\n\nRegards,\n{referrer}', status: 'Active' },
  { name: 'Rabies Protocol', body: 'Patient {patient} presents with {complaint}. Category {category} exposure. Please initiate ARV protocol as per WHO guidelines.\n\nRegards,\n{referrer}', status: 'Active' },
  { name: 'Dermatology Referral', body: 'Dear Dr. {doctor},\n\nPatient {patient} has {complaint} of {duration}. No improvement with initial treatment. Please evaluate.\n\nRegards,\n{referrer}', status: 'Active' },
  { name: 'General Referral', body: 'Dear Dr. {doctor},\n\nKindly evaluate and manage patient {patient} for {complaint}.\n\nRegards,\n{referrer}', status: 'Active' },
];

export const mockMedicineSalts: MedicineSalt[] = [
  { saltName: 'Paracetamol', description: 'Analgesic and antipyretic', status: 'Active' },
  { saltName: 'Amoxicillin', description: 'Broad-spectrum antibiotic', status: 'Active' },
  { saltName: 'Omeprazole', description: 'Proton pump inhibitor for acid reflux', status: 'Active' },
  { saltName: 'Cetirizine', description: 'Antihistamine for allergies', status: 'Active' },
  { saltName: 'Amlodipine', description: 'Calcium channel blocker for hypertension', status: 'Active' },
  { saltName: 'Azithromycin', description: 'Macrolide antibiotic', status: 'Active' },
  { saltName: 'Salbutamol', description: 'Bronchodilator for asthma', status: 'Active' },
  { saltName: 'Metformin', description: 'Oral antidiabetic medication', status: 'Active' },
  { saltName: 'Ibuprofen', description: 'NSAID for pain and inflammation', status: 'Active' },
  { saltName: 'Ferrous Sulfate', description: 'Iron supplement for anemia', status: 'Active' },
];

export const mockBrands: Brand[] = [
  { brandName: 'Crocin', companyName: 'GSK', status: 'Active' },
  { brandName: 'Mox', companyName: 'Cipla', status: 'Active' },
  { brandName: 'Omez', companyName: 'Dr. Reddy\'s', status: 'Active' },
  { brandName: 'Zyrtec', companyName: 'Sun Pharma', status: 'Active' },
  { brandName: 'Amlopin', companyName: 'Torrent Pharma', status: 'Active' },
  { brandName: 'Azithral', companyName: 'Alembic', status: 'Active' },
  { brandName: 'Asthalin', companyName: 'Cipla', status: 'Active' },
  { brandName: 'Glyciphage', companyName: 'Franco-Indian', status: 'Active' },
  { brandName: 'Brufen', companyName: 'Abbott', status: 'Active' },
  { brandName: 'Suminat', companyName: 'Natco Pharma', status: 'Active' },
];

export const mockCompanies: Company[] = [
  { companyName: 'Cipla', description: 'Leading Indian pharmaceutical company', status: 'Active' },
  { companyName: 'Sun Pharma', description: 'Large multinational pharmaceutical company', status: 'Active' },
  { companyName: 'Dr. Reddy\'s Laboratories', description: 'Global pharmaceutical company', status: 'Active' },
  { companyName: 'Torrent Pharma', description: 'Indian pharmaceutical company', status: 'Active' },
  { companyName: 'Abbott', description: 'American healthcare company', status: 'Active' },
  { companyName: 'GSK', description: 'British pharmaceutical company', status: 'Active' },
  { companyName: 'Alembic', description: 'Indian pharmaceutical company', status: 'Active' },
  { companyName: 'Natco Pharma', description: 'Indian pharmaceutical company', status: 'Active' },
];

export const mockStockTypes: StockType[] = [
  { stockTypeName: 'Tablet', description: 'Solid oral dosage form', status: 'Active' },
  { stockTypeName: 'Capsule', description: 'Gelatin-encased medication', status: 'Active' },
  { stockTypeName: 'Syrup', description: 'Liquid oral medication', status: 'Active' },
  { stockTypeName: 'Injection', description: 'Parenteral dosage form', status: 'Active' },
  { stockTypeName: 'Ointment', description: 'Topical semisolid preparation', status: 'Active' },
];

export const mockPrescriptionCodes: PrescriptionCode[] = [
  { code: 'PC001', description: 'Paracetamol 650mg', dose: '1 tablet TDS x 3 days' },
  { code: 'PC002', description: 'Azithromycin 500mg', dose: '1 tablet OD x 3 days' },
  { code: 'PC003', description: 'Amoxicillin 500mg', dose: '1 capsule TDS x 7 days' },
  { code: 'PC004', description: 'Omeprazole 20mg', dose: '1 capsule OD x 14 days' },
  { code: 'PC005', description: 'Cetirizine 10mg', dose: '1 tablet OD x 7 days' },
];
