import { Outlet } from 'react-router'
import DashboardSidebar from './dashboard-sidebar'
import DashboardHeader from './dashboard-header'

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden px-4 lg:px-6 xl:px-10 py-4 lg:py-7.5 lg:ml-64">
        <DashboardHeader />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
