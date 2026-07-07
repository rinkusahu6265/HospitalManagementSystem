import type { RouteObject } from 'react-router-dom'

export const menuRoutes: RouteObject[] = [
  {
    path: '/health-management',
    children: [
      { index: true, id: 'Health Portal', path: '' },
      { id: 'Admin Portal', path: 'admin' },
      { id: 'Doctor Portal', path: 'doctor' },
      { id: 'Pharmacist Portal', path: 'pharmacist' },
      { id: 'Employee Portal', path: 'employee' },
    ],
  },
]
