import { Routes, Route, Navigate } from 'react-router'

import useDynamicFavicon from '@/hooks/useDynamicFavicon'

import { ProtectedRoute } from '@/components/common'
import DashboardLayout from '@/components/layout/dashboard-layout'

import SignIn from '@/pages/auth/sign-in'
import SignUp from '@/pages/auth/sign-up'

import Dashboard from '@/pages/dashboard/dashboard'
import Transactions from '@/pages/dashboard/transactions'
import DashboardNotFound from '@/pages/dashboard/not-found'

import Admin from '@/pages/admin'
import NotFound from '@/pages/not-found'

function App() {
  useDynamicFavicon('/favicon.svg', '/favicon-dark.svg')

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<DashboardNotFound />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
