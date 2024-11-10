import DashboardNavbar from '@/components/layout/DashboardNavbar'
import WalletModal from '@/src/modals/wallet'
import React from 'react'

const OrganizationDashboardlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <DashboardNavbar />
        {children}
        <WalletModal />
    </div>
  )
}

export default OrganizationDashboardlayout