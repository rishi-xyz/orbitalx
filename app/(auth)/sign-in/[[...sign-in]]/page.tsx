"use client";
import { Loader2 } from 'lucide-react';
import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs';
export default function Page() {


  return (
    
      <div  className=" flex flex-col items-center justify-center px-4 ">

        {/* Container for gradient background */}
        <div className="bg-gradient-to-r from-[#1e1e2d] via-[#1e1e3f] to-[#1e1e2d]  p-8 rounded-lg shadow-lg text-white text-center space-y-1 pt-2 pb-2 mt-11">
          <h1 className="font-bold text-3xl text-green-500 ">
            Welcome Back!
          </h1>
          <p className="text-base ">
            Log in to your account to get back to your Page!
          </p>
        </div>
        <div className='text-base text-[#7E8CA0] mt-7 '>
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin text-muted-foreground' />
          </ClerkLoading>
        </div>
        
      </div>
    
  );
}
