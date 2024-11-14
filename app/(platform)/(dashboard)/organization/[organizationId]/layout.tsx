import DashboardNavbar from '@/components/layout/DashboardNavbar'
import WalletModal from '@/src/modals/wallet'
import { ClerkProvider, useOrganization } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import React from 'react'
import {startCase} from "lodash"
import { currentUser } from '@clerk/nextjs/server'

export async function generateMetadata() {
  const user = await currentUser();
  const { orgSlug } = await auth();
  if (orgSlug) {
    return{
      title :startCase(orgSlug || "Org"),
    };
  } else if (user) {
    return{
      title : startCase(user.firstName || "User"),
    };
  };
};

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