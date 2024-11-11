import DashboardNavbar from '@/components/layout/DashboardNavbar'
import WalletModal from '@/src/modals/wallet'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const OrganizationDashboardlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <ClerkProvider>
    
        <DashboardNavbar />
        {children}
        <WalletModal />
    </ClerkProvider>
    
  )
}

export default OrganizationDashboardlayout