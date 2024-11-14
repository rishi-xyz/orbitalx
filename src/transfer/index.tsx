"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SelfTransfer from "../SelfTransfer";
import TransferToOthers from "../TransferToOthers";
//import { useCodegenGeneratedRouterAllTokensQuery } from "@euclidprotocol/graphql-codegen/dist/src/react"

const Transfer = () => {
  return (
    <div className="flex flex-col items-center mt-4 gap-6 w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8 border border-gray-700 rounded-lg p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
      <Tabs defaultValue="account" className="items-center justify-center w-full">
        <TabsList className="gap-1 w-full flex-wrap">
          <TabsTrigger value="toothers" className="text-base bg-gray-700 text-white flex-1">
            To Others
          </TabsTrigger>
          <TabsTrigger value="toself" className="text-base bg-gray-700 text-white flex-1">
            To Self
          </TabsTrigger>
        </TabsList >
        <TabsContent value="toothers" className="flex flex-col" >
          <TransferToOthers />
        </TabsContent>
        <TabsContent value="toself" className="flex flex-col">
          <SelfTransfer />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Transfer;