import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";
import { SendIcon } from "lucide-react";        

export default function TransactionPage() {
  return (
    <div className="p-5 sm:p-10 space-y-8 space-x-0 sm:space-x-60">
      {/* Total Balance Section */}
      <section className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r bg-purple-900/50 to-teal-500 text-white p-6 rounded-lg shadow sm:ml-60">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-lg">Total Balance</h2>
          <p className="text-3xl font-bold">€ 320,845.20</p>
          <span className="text-sm text-blue-600">15.8% ↑</span>
        </div>
        <div className="space-x-4 sm:space-x-0 sm:space-y-3 flex flex-row sm:flex-col justify-center sm:items-start">
          <Button className="bg-green-700 flex items-center mb-3 sm:mb-0">
            <PlusIcon className="w-10 h-4 mr-2" /> Add
          </Button>
          <Button className="bg-green-700 flex items-center">
            <SendIcon className="w-4 h-4 mr-2" /> Send
          </Button>
        </div>
      </section>

      {/* Cash Flow and Summary Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Cash Flow Graph */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-2 p-2">
          <CardHeader>
            <CardTitle>Cash Flow</CardTitle>
            <CardDescription>Weekly | Daily | Manage</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <Chart /> {/* Use a placeholder component for the chart */} 
          </CardContent>
        </Card>
        
        {/* Income and Expense */}
        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardContent>
              <p className="text-sm font-medium">Income</p>
              <p className="text-2xl font-bold text-green-600">€ 12,378.20</p>
              <span className="text-sm text-green-400">45.0% ↑</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent >
              <p className="text-sm font-medium">Expense</p>
              <p className="text-2xl font-bold text-red-600">€ 5,788.21</p>
              <span className="text-sm text-red-400">12.5% ↓</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Account Summary Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-3">
            <p className="text-sm font-medium">Business Account</p>
            <p className="text-2xl font-bold">€ 8,072.20</p>
            <span className="text-sm text-green-400">16.0% ↑</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3">
            <p className="text-sm font-medium">Total Saving</p>
            <p className="text-2xl font-bold">€ 3,765.35</p>
            <span className="text-sm text-red-400">8.2% ↓</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3">
            <p className="text-sm font-medium">Total Staked</p>
            <p className="text-2xl font-bold">€ 14,376.16</p>
            <span className="text-sm text-green-400">35.2% ↑</span>
          </CardContent>
        </Card>
      </section>

      {/* Recent Activity Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <Card>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Transfer", name: "Theo Lawrence", amount: "€ 500.00", status: "Success", method: "Credit Card" },
                { type: "Withdrawal", name: "Keth Smith", amount: "€ 250.00", status: "Pending", method: "Bank Transfer" },
                { type: "Transfer", name: "Danayeres wick", amount: "€ 400.00", status: "Success", method: "Credit Card" },
                { type: "Withdrawal", name: "John Snow", amount: "€ 350.00", status: "Failed", method: "Bank Transfer" },
                { type: "Transfer", name: "Belly walker", amount: "€ 200.00", status: "Success", method: "Credit Card" },
                { type: "Withdrawal", name: "Marissa Smith", amount: "€ 150.00", status: "Failed", method: "Bank Transfer" },
                // Add more fake transactions here
              ].map((tx, index) => (
                <div key={index} className="flex justify-between items-center p-4 border-b last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      {/* Icon placeholder */}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{tx.name}</p>
                      <p className="text-xs text-gray-500">{tx.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{tx.amount}</p>
                      <p
                        className={`text-xs ${
                          tx.status === "Success"
                            ? "text-green-500"
                            : tx.status === "Failed"
                            ? "text-red-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {tx.status}
                      </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* My Cards Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">My Wallet</h2>
        <Card className="flex items-center p-4 space-x-4">
          <div className="bg-green-500 w-16 h-10 rounded-lg"></div> {/* Card design placeholder */}
          <div>
            <p className="text-sm font-medium">Kepler **** 2104</p>
            <p className="text-xs text-gray-500">Expires 12/26</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
