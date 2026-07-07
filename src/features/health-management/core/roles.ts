import type { Role, MockUser } from './types';

export const ROLES: Role[] = [
  {
    roleId: 'health_admin',
    roleName: 'Health Admin',
    portal: 'admin',
    permissions: ['view_all', 'create_all', 'edit_all', 'delete_all'],
    tiles: [
      { icon: 'pi-chart-bar', title: 'Dashboard', description: 'Overview & KPIs', color: 'border-blue-500', to: '/health-management/admin/dashboard' },
      { icon: 'pi-users', title: 'Memberships', description: 'Manage members', color: 'border-green-500', to: '/health-management/memberships' },
      { icon: 'pi-file', title: 'Health Records', description: 'Patient records', color: 'border-purple-500', to: '/health-management/records' },
      { icon: 'pi-user', title: 'Doctor Time', description: 'Doctor schedules', color: 'border-indigo-500', to: '/health-management/doctors' },
      { icon: 'pi-box', title: 'Medical Stock', description: 'Inventory management', color: 'border-yellow-500', to: '/health-management/stock' },
      { icon: 'pi-pencil', title: 'Prescriptions', description: 'Manage prescriptions', color: 'border-teal-500', to: '/health-management/prescriptions' },
      { icon: 'pi-shopping-cart', title: 'Dispensary', description: 'Medicine dispensing', color: 'border-orange-500', to: '/health-management/dispensary' },
      { icon: 'pi-calendar', title: 'Appointments', description: 'Schedule management', color: 'border-pink-500', to: '/health-management/appointments' },
      { icon: 'pi-user-plus', title: 'Guest Users', description: 'External users', color: 'border-cyan-500', to: '/health-management/guest-users' },
      { icon: 'pi-credit-card', title: 'Subscriptions', description: 'Plan management', color: 'border-violet-500', to: '/health-management/subscriptions' },
      { icon: 'pi-chart-line', title: 'Reports', description: 'Analytics & reports', color: 'border-red-500', to: '/health-management/reports' },
      { icon: 'pi-cog', title: 'Settings', description: 'System configuration', color: 'border-gray-500', to: '/health-management/admin/settings' },
    ],
  },
  {
    roleId: 'health_doctor',
    roleName: 'Doctor',
    portal: 'doctor',
    permissions: ['view_records', 'create_records', 'view_appointments', 'create_prescriptions'],
    tiles: [
      { icon: 'pi-chart-bar', title: 'Dashboard', description: 'My Overview', color: 'border-blue-500', to: '/health-management/doctor/dashboard' },
      { icon: 'pi-calendar', title: 'Appointments', description: 'My appointments', color: 'border-green-500', to: '/health-management/appointments' },
      { icon: 'pi-file', title: 'Health Records', description: 'Patient records', color: 'border-green-500', to: '/health-management/records' },
      { icon: 'pi-pencil', title: 'Prescriptions', description: 'Write prescriptions', color: 'border-purple-500', to: '/health-management/prescriptions' },
      { icon: 'pi-chart-line', title: 'Reports', description: 'My Reports', color: 'border-red-500', to: '/health-management/reports' },
    ],
  },
  {
    roleId: 'health_pharmacist',
    roleName: 'Pharmacist',
    portal: 'pharmacist',
    permissions: ['view_stock', 'edit_stock', 'view_dispensary', 'create_dispensary'],
    tiles: [
      { icon: 'pi-chart-bar', title: 'Dashboard', description: 'Pharmacy Overview', color: 'border-blue-500', to: '/health-management/pharmacist/dashboard' },
      { icon: 'pi-shopping-cart', title: 'Dispensary', description: 'Dispense medicine', color: 'border-green-500', to: '/health-management/dispensary' },
      { icon: 'pi-box', title: 'Medical Stock', description: 'Stock management', color: 'border-purple-500', to: '/health-management/stock' },
      { icon: 'pi-chart-line', title: 'Reports', description: 'Inventory Reports', color: 'border-red-500', to: '/health-management/reports' },
    ],
  },
  {
    roleId: 'employee-health',
    roleName: 'Employee',
    portal: 'employee',
    permissions: ['view_own_memberships', 'view_own_records', 'view_own_appointments'],
    tiles: [
      { icon: 'pi-chart-bar', title: 'Dashboard', description: 'My health overview', color: 'border-blue-500', to: '/health-management/employee/dashboard' },
      { icon: 'pi-users', title: 'Memberships', description: 'My memberships', color: 'border-green-500', to: '/health-management/memberships' },
      { icon: 'pi-file', title: 'Health Records', description: 'My records', color: 'border-purple-500', to: '/health-management/records' },
      { icon: 'pi-calendar', title: 'Appointments', description: 'My appointments', color: 'border-orange-500', to: '/health-management/appointments' },
      { icon: 'pi-chart-line', title: 'Reports', description: 'My Health Reports', color: 'border-red-500', to: '/health-management/reports' },
    ],
  },
  {
    roleId: 'health_view',
    roleName: 'Health Viewer',
    portal: 'admin',
    permissions: ['view_all'],
    tiles: [],
  },
  {
    roleId: 'health-head',
    roleName: 'Health Head',
    portal: 'admin',
    permissions: ['view_all', 'create_memberships', 'create_records'],
    tiles: [],
  },
  {
    roleId: 'health-super-head',
    roleName: 'Health Super Head',
    portal: 'admin',
    permissions: ['view_memberships', 'view_records', 'view_doctors', 'view_stock'],
    tiles: [],
  },
];

export const mockCurrentUser: MockUser = {
  id: 'USR001',
  name: 'Dr. Admin',
  role: 'health_admin',
  email: 'admin@university.edu',
};

export const getRoleById = (roleId: string): Role | undefined =>
  ROLES.find((r) => r.roleId === roleId);

export const getPortalTiles = (roleId: string): import('./types').PortalTile[] => {
  const role = ROLES.find((r) => r.roleId === roleId);
  return role?.tiles || [];
};
