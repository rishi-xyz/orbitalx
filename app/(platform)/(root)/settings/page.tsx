"use client"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Settings = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 m-7">
      <Select>
        <SelectTrigger className="w-full sm:w-[250px] h-16 text-md">
          <SelectValue placeholder="Notification Preference" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Notification Preferences</SelectLabel>
            <SelectItem value="Hidden">Vibration</SelectItem>
            <SelectItem value="Hidden">Silent</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full sm:w-[250px] h-16 text-md">
          <SelectValue placeholder="Currency Preferences" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Currency Preferences</SelectLabel>
            <SelectItem value="Rupess">Rupees</SelectItem>
            <SelectItem value="Dollar">Dollar</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full sm:w-[250px] h-16 text-md">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            <SelectItem value="French">French</SelectItem>
            <SelectItem value="Chinese">Chinese</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full sm:w-[250px] h-16 text-md">
          <SelectValue placeholder="Payment Method" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Payment Method</SelectLabel>
            <SelectItem value="French">Card</SelectItem>
            <SelectItem value="Chinese">Wallet</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Settings
